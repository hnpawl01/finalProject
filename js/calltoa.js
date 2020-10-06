var eduPromises = d3.csv("../education.csv");

//----------drawingFinalvsHW-------------
	var drawPlot = function (education,target,xScale,yScale)
	{
		console.log("drawplot" ,education);
		target.selectAll("circle")
		.data(education)
		.enter()
		.append("circle")
		.attr("cx", function(makeup)
			 {
			return xScale(makeup.totalcap)
			})
		.attr("cy", function(makeup)
			 {
			return yScale(makeup.math)
			})
		.attr("r",2) 
		
		.on("mouseover", function(makeup)
		   {
			var xPos = d3.event.pageX;
			var yPos = d3.event.pageY;
			d3.select("#tooltipc")
			.classed("hidden",false)
			.style("top",yPos+"px")
			.style("left",xPos+"px")
			d3.select("#scatter")
			.text(makeup.country)
			d3.select("#money")
			.text(makeup.totalcap)
			d3.select("#mathscores")
			.text(makeup.math)
		})}
var drawAxis = function(graph,margins,xScale,yScale)
	{
	var xAxis = d3.axisBottom(xScale)
 	d3.select("svg")
	.append("g")
	.attr("transform", "translate (" + margins.left + "," +(margins.top + graph.height) + ")")
	.call(xAxis)
	
	var yAxis = d3.axisLeft(yScale);
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," + (margins.top) + ")")
	.call(yAxis) 
	}
	
//---------scale---------
var initgraph = function (education)
{
	console.log("insideinit",education)
	var screen = {width:700, height:500}
	var margins = {left:30, right:20, top:20, bottom:20}
	var graph = 
		{
			width: screen.width - margins.left - margins.right, 
			height: screen.height - margins.top - margins.bottom
		}
	
    d3.select("svg")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
	var target = d3.select("svg")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top + ")")
	
	d3.select("#graph")
	.attr("width", screen.width)
	.attr("height", screen.height)
	var xScale = d3.scaleLinear()
					.domain([0,14500])
					.range([0,graph.width])
	var yScale = d3.scaleLinear()
					.domain([0,600])
					.range([graph.height,0])
	drawAxis(graph,margins,xScale,yScale)
	drawPlot(education,target,xScale,yScale);
		
}

//--------promise-----------
var successFcn = function(education)
{
	console.log("education",education)
	initgraph(education)	
}
var failureFcn = function(error)
{
	console.log("error", error)

}
eduPromises.then(successFcn, failureFcn)