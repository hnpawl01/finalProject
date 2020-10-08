var callPromises = d3.csv("../calltoas.csv");

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
			return xScale(makeup.monPercap)
		})
		.attr("cy", function(makeup)
		{
			return yScale(makeup.math)
		})
		.attr("r",function(makeup)
		{
			return ((100-makeup.perenrolled))
		}) 
		
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
			.text(makeup.monPercap)
			d3.select("#mathscores")
			.text(makeup.math)
			d3.select("#out")
			.text(makeup.totalout)
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
var drawLabels = function(graph,margins)
	{
		var labels = d3.select("svg")
        .append("g")
        .classed("labels",true)
	   
	   labels.append("text")
		.classed("title", true)
		.text("Math Scores vs Money")
        .attr("text-anchor","middle")
		.attr("x", margins.left + graph.width/2)
		.attr("y", margins.top + (10))
	
	labels.append("text")
		.classed("label", true)
		.text("Money per Capita")
        .attr("text-anchor","middle")
		.attr("x", margins.left + graph.width/2)
		.attr("y", margins.top + (graph.height) +(30
												 ))
	
	labels.append("text")
		.classed("label", true)
		.text("Math Test Scores")
        .attr("text-anchor","middle")
		.attr( "transform" , "rotate(90) translate (" +(graph.height/2)  + ",-3)")
	}
	
//---------scale---------
var initgraph = function (education)
{
	console.log("insideinit",education)
	var screen = {width:700, height:500}
	var margins = {left:60, right:20, top:20, bottom:40}
	var graph = 
		{
			width: screen.width - margins.left - margins.right, 
			height: screen.height - margins.top - margins.bottom
		}
	var target = d3.select("svg")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top + ")")
	
    d3.select("svg")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
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
	drawLabels(graph,margins)	
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
callPromises.then(successFcn, failureFcn)