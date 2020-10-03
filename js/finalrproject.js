var eduPromise = d3.csv("../education.csv");

//----------drawbar-------------
	var drawBar = function (education,screen,xScale,yScale,graph,target)
	{
		target.selectAll("rect")
		.data(education.stRate)
		.enter()
		.append("rect")
		.attr("x",function(stratio)
		{
			return xScale(stratio.ranking)
		})
		.attr("y", function(stratio){
			 return yScale(stratio.stRate)})
		.attr("width", xScale.bandwidth)
		.attr("height", function(stratio)
			 {
			return graph.height -  yScale
		})
		}
	
	
/*//--------buttons----------
		var stuvsr = function (education,screen,xScale,yScale)
		{
			d3.select("#banner")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
			drawBar(education,screen,xScale,yScale)
			})
		}
		
		var perpvsr = function (education,screen,xScale,yScale)
		{
			d3.select("#banner2")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
			drawBar2(education,screen,xScale,yScale)
				
			})
		}
		
		var mathvsr = function (education,screen,xScale,yScale)
		{
			d3.select("#banner3")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
			drawBar3(education,screen,xScale,yScale)
				
			})
		}	
		var govtable = function (education,screen,xScale,yScale)
		{
			d3.select("#banner4")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
			drawBar4(education,screen,xScale,yScale)
				
			})
		}
		*/
//----------the graph extras-----------
	var drawLegend = function()
	{
		
	}
	var drawAxes = function()
	{
		
	}
	var drawLabels = function()
	{
		
	}
	
//---------scale---------
var initgraph = function (education,screen,xScale,yScale,graph,target)
{
	console.log(education)
	var screen = {width:500, height:500}
	var margins = {left:20, right:20, top:20, bottom:20}
	
	var graph = 
		{
			width: screen.width - margins.left - margins.right, 
			height: screen.height - margins.top - margins.bottom
		}
	var xScale = d3.scaleBand()
	.paddingInner(.3)
	.domain([0,21])
	.range([0, graph.width])
	var yScale = d3.scaleBand()
	.domain([600,0])
	.range([graph.height,0])
	
	d3.select("svg")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
	var target = d3.select("svg")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top+")")
	
	
	drawAxes(graph,margins,xScale,yScale)
	drawBar(education,screen,xScale,yScale,graph,target)
	drawLabels(graph,margins)
	drawLegend(graph,margins)
	
	stuvsr(educaiton,screen,xScale,yScale)
	perpvsr(education,screen,xScale,yScale)	
	mathvsr(education,screen,xScale,yScale)
	
		
}

//-------------promise-------------
var successFcn = function(education)
{
	console.log("education",education)
	initgraph(education,screen,xScale,yScale,graph,target)
	
}
var failureFcn = function(error)
{
	console.log("error", error)

}
eduPromise.then(successFcn, failureFcn)
