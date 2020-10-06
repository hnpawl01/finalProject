var eduPromise = d3.csv("../education.csv");

//----------drawbar-------------
	var drawBar = function (education,xScale,yScale,target,graph)
	{
		console.log("inside drawBar", yScale)
		target.selectAll("rect")
		.data(education)
		.enter()
		.append("rect")
		.attr("x",function(makeup)
		{
			
			return xScale(makeup.country)
		})
		.attr("y", function(makeup){
			console.log(yScale(makeup.stRate))
			 return yScale(makeup.stRate)})
		.attr("width", xScale.bandwidth)
		.attr("height", function(makeup)
			 {
			return graph.height -  yScale(makeup.stRate)
		})
		.attr("fill","blue")
		.on("mouseover", function(makeup)
		{
			console.log("rect")
			var xPos = d3.event.pageX;
			var yPos = d3.event.pageY;
			d3.select("#tooltip")
			.classed("hidden",false)
			.style("top",yPos+"px")
			.style("left",xPos+"px")
			d3.select("#rOne")
			.text(makeup.country)
			d3.select("#stRatios")
			.text(makeup.stRate)
			d3.select(this)
			.attr("fill", "yellow")
	 		
		})
		.on("mouseleave", function(makeup)
		{
			d3.select(this)
			.attr("fill", "blue")
		})}
	
	var drawBar2 = function (education,xScale,yScale2,target2,graph)
	{
		console.log("inside drawBar2", target2)
		target2.selectAll("rect")
		.data(education)
		.enter()
		.append("rect")
		.attr("x",function(makeup)
		{
			
			return xScale(makeup.country)
		})
		.attr("y", function(makeup){
			console.log(yScale2(makeup.percPerP))
			 return yScale2(makeup.percPerP)})
		.attr("width", xScale.bandwidth)
		.attr("height", function(makeup)
			 {
			return graph.height -  yScale2(makeup.percPerP)
		})
		
		.attr("fill","red")
		.on("mouseover", function(makeup)
		{
			console.log("rect")
			var xPos = d3.event.pageX;
			var yPos = d3.event.pageY;
			d3.select("#tooltip")
			.classed("hidden",false)
			.style("top",yPos+"px")
			.style("left",xPos+"px")
			d3.select("#rOne")
			.text(makeup.country)
			d3.select("#stRatios")
			.text(makeup.stRate)
			d3.select(this)
			.attr("fill", "purple")	
		})
		.on("mouseleave", function(makeup)
		{
			d3.select(this)
			.attr("fill", "red")
		})}
	
	var drawBar3 = function (education,xScale,yScale3,target3,graph)
	{
		console.log("inside drawBar3", target3)
		target3.selectAll("rect")
		.data(education)
		.enter()
		.append("rect")
		.attr("x",function(makeup)
		{
			
			return xScale(makeup.country)
		})
		.attr("y", function(makeup){
			console.log(yScale3(makeup.math))
			 return yScale3(makeup.math)})
		.attr("width", xScale.bandwidth)
		.attr("height", function(makeup)
			 {
			return graph.height -  yScale3(makeup.math)
		})
		.attr("fill","purple")
		.on("mouseover", function(makeup)
		{
			console.log("rect")
			var xPos = d3.event.pageX;
			var yPos = d3.event.pageY;
			d3.select("#tooltip")
			.classed("hidden",false)
			.style("top",yPos+"px")
			.style("left",xPos+"px")
			d3.select("#rOne")
			.text(makeup.country)
			d3.select("#stRatios")
			.text(makeup.stRate)
			d3.select(this)
			.attr("fill", "orange")	
		})
		.on("mouseleave", function(makeup)
		{
			d3.select(this)
			.attr("fill", "purple")
		})}
//------------drawtable------------
var drawTable = function(education)
{
	d3.select("thead")
	.append("th")
	.text("Country With Ranking")
	d3.select("thead")
	.append("th")
	.text("Government of Country")
	
	var rows = d3.select("#govstable tbody")
	.selectAll("tr")
	.data(education)
	.enter()
	.append("tr")
	rows.append("td")
	.text(function(makeup)
	{
		console.log("insidecountry")
		return makeup.country 
	})
	
	rows.append("td")
	.text(function(makeup)
	{
		console.log("insidetype")
		return makeup.typeGov
	})
}
	
	
//----------the graph extras-----------
	var drawLegend = function(graph,margins)
	{
		
	}
		
	//---------axes---------
	var drawAxes = function(graph,margins,xScale,yScale)
	{
	var xAxis = d3.axisBottom(xScale); 
	var turns = d3.select("svg.first")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top + graph.height) + ")")
	.call(xAxis)
		
	turns.selectAll("text")
	.attr("text-anchor","start")
	.attr("transform","rotate(90) translate(8,-11)")
		
	var yAxis = d3.axisLeft(yScale);
	d3.select("svg.first")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top) + ")")
	.call(yAxis) 
	}
	
	var drawAxes2 = function(graph,margins,xScale,yScale2)
	{
	var xAxis2 = d3.axisBottom(xScale); 
	var turns2 = d3.select("svg.second")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top + graph.height) + ")")
	.call(xAxis2)
	
	turns2.selectAll("text")
	.attr("text-anchor","start")
	.attr("transform","rotate(90) translate(8,-11)")
		
	var yAxis2 = d3.axisLeft(yScale2);
	d3.select("svg.second")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top) + ")")
	.call(yAxis2) 
	}
	
	var drawAxes3 = function(graph,margins,xScale,yScale3)
	{
	var xAxis3 = d3.axisBottom(xScale); 
	var turns3 = d3.select("svg.third")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top + graph.height) + ")")
	.call(xAxis3)
	
	turns3.selectAll("text")
	.attr("text-anchor","start")
	.attr("transform","rotate(90) translate(8,-11)")
		
	var yAxis3 = d3.axisLeft(yScale3);
	d3.select("svg.third")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top) + ")")
	.call(yAxis3) 
	}
	//--------labels-------
	var drawLabels = function(graph,margins)
	{
		
	}
	
//---------makegraphs---------
var initgraph = function (education)
{
	console.log("inside init",education)
	var screen = {width:600, height:400}
	var margins = {left:40, right:20, top:20, bottom:100}
	
	var graph = 
		{
			width: screen.width - margins.left - margins.right, 
			height: screen.height - margins.top - margins.bottom
		}
	//-------scales--------
	var xScale = d3.scaleBand()
	.domain(["1 Japan","2 United Kingdom", "3 South Korea", "4 Singapore", "5 Russian Fedration",
			 "6 Finland", "7 Canada", "8 Netherlands", "9 Ireland", "10 Israel", "11 China", 
			 "12 New Zealand", "13 Norway", "14 Belgium", "15 Germany", "16 Denmark", "17 Estonia", 
			 "18 United States", "19 France", "20 Portugal", "21 Average"])
	.range([0, graph.width])
	.paddingInner(.3)
	var yScale = d3.scaleLinear()
	.domain([0,25])
	.range([graph.height,0])
	
	var yScale2 = d3.scaleLinear()
	.domain([0,30])
	.range([graph.height,0])
	
	var yScale3 = d3.scaleLinear()
	.domain([0,575])
	.range([graph.height,0])
	
	d3.select("svg.first")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
	var target = d3.select("svg.first")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top + ")")
	
	d3.select("svg.second")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
	var target2 = d3.select("svg.second")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top + ")")
	
	d3.select("svg.third")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
	var target3 = d3.select("svg.third")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top + ")")
	
	//---allgraphscalls---
	drawAxes(graph,margins,xScale,yScale)
	drawBar(education,xScale,yScale,target,graph)
	drawLabels(graph,margins)
	drawAxes2(graph,margins,xScale,yScale2)
	drawBar2(education,xScale,yScale2,target2,graph)
	drawAxes3(graph,margins,xScale,yScale3)
	drawBar3(education,xScale,yScale3,target3,graph)
	drawTable(education)
		
}

//-------------promise-------------
var successFcn = function(education)
{
	console.log("education",education)
	initgraph(education)
	
}
var failureFcn = function(error)
{
	console.log("error", error)

}
eduPromise.then(successFcn, failureFcn)
