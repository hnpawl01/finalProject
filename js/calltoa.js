var eduPromises = d3.csv("../education.csv");

//----------drawingFinalvsHW-------------
	var drawPlot = function (education,screen,xScale,yScale)
	{
		console.log("drawplot" ,education);
		d3.select("#graph")
		.selectAll("circle")
		.data(education)
		.enter()
		.append("circle")
		.attr("cx", function(makeup)
			 {
			console.log("cx",makeup)
			return makeup.ranking
			})
		.attr("cy", function(makeup)
			 {
			console.log("cy",makeup)
			return makeup.math
			})
		.attr("r",2)
		.on("mouseenter", function(education)
		   {
			var xPos = d3.event.pageX;
			var yPos = d3.event.pageY;
			d3.select("#tooltipc")
			.classed("hidden",false)
			.style("top",yPos+"px")
			.style("left",xPos+"px")
			
		})}		
	
//---------scale---------
var initgraph = function (education)
{
	console.log("insideinit",education)
	var screen = {width:500, height:500}
	d3.select("#graph")
	.attr("width", screen.width)
	.attr("height", screen.height)
	var xScale = d3.scaleLinear()
					.domain([0,20])
					.range([0,screen.width])
	var yScale = d3.scaleLinear()
					.domain([0,575])
					.range([screen.height,0])
	drawPlot(education,screen,xScale,yScale);
		
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