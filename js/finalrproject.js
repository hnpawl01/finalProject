var eduPromise = d3.csv("../education.csv");

//----------drawbar-------------
	var drawBar = function (education,xScale,yScale,target,graph)
	{
		console.log("inside drawBar")
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
		}
	var drawBar2 = function (education,xScale,yScale2,target,graph)
	{
		console.log("inside drawBar", target)
		target.selectAll("rect")
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
		}
	var drawBar3 = function (education,xScale,yScale3,target,graph)
	{
		console.log("inside drawBar", target)
		target.selectAll("rect")
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
		}
//------------drawtable------------
var drawTable = function()
{
	var rows = d3.select("govstable tbody")
	.selectAll("tr")
	.data(education)
	.enter()
	.append("tr")
	
	rows.append("td")
	.text(function(education)
	{
		return education.ranking 
	})
	rows.append("td")
	.text(function(education)
		 {
		return education.typeGov
	})
}
	
//--------buttons----------
		var stuvsr = function (education,xScale,yScale,target,graph)
		{
			d3.select("#banner")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
			drawBar(education,xScale,yScale,target,graph)
			})
		}
		
		var perpvsr = function (education,xScale,yScale2,target,graph,margins)
		{
			d3.select("#banner2")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
				d3.selectAll("drawAxes")
				.classed("hidden",true)
			drawAxes2(graph,margins,xScale,yScale2)
			drawBar2(education,xScale,yScale2,target,graph)
				
			})
		}
		
		var mathvsr = function (education,xScale,yScale3,target,graph,margins)
		{
			d3.select("#banner3")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
				
			drawAxes3(graph,margins,xScale,yScale3)
			drawBar3(education,xScale,yScale3,target,graph)
				
			})
		}	
		var govtablebt = function (education,screen,xScale,yScale)
		{
			d3.select("#banner4")
			.on("click", function()
			   {
				d3.selectAll("rect")
				.remove()
			drawTable(education,screen,xScale,yScale)
				
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
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top + graph.height) + ")")
	.call(xAxis)
		
	var yAxis = d3.axisLeft(yScale);
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.bottom/2) + ")")
	.call(yAxis) 
	}
	
	var drawAxes2 = function(graph,margins,xScale,yScale2)
	{
	var xAxis = d3.axisBottom(xScale); 
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top + graph.height) + ")")
	.call(xAxis)
		
	var yAxis = d3.axisLeft(yScale2);
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.bottom/2) + ")")
	.call(yAxis) 
	}
	
	var drawAxes3 = function(graph,margins,xScale,yScale3)
	{
	var xAxis = d3.axisBottom(xScale); 
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.top + graph.height) + ")")
	.call(xAxis)
		
	var yAxis = d3.axisLeft(yScale3);
	d3.select("svg")
 	.append("g")
	.attr("transform", "translate (" + margins.left + "," +( margins.bottom/2) + ")")
	.call(yAxis) 
	}
	//--------labels-------
	var drawLabels = function(graph,margins)
	{
		
	}
	
//---------makegraph---------
var initgraph = function (education)
{
	console.log("inside init",education)
	var screen = {width:600, height:300}
	var margins = {left:40, right:20, top:20, bottom:20}
	
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
			 "18 United States", "19 France", "20 Portugal"])
	.range([0, graph.width])
	.paddingInner(.3)
	
	var yScale = d3.scaleLinear()
	.domain([0,25])
	.range([graph.height,0])
	
	var yScale2 = d3.scaleLinear()
	.domain([0,50])
	.range([graph.height,0])
	
	var yScale3 = d3.scaleLinear()
	.domain([0,575])
	.range([graph.height,0])
	
	d3.select("svg")
	.attr("width",screen.width)
	.attr("height",screen.height)
	
	var target = d3.select("svg")
	.append("g")
	.attr("id", "#graph")
	.attr("transform", "translate(" + margins.left + ", " + margins.top + ")")
	
	//---firstgraphcalls---
	drawAxes(graph,margins,xScale,yScale)
	drawBar(education,xScale,yScale,target,graph)
	drawLabels(graph,margins)
	drawLegend(graph,margins)
	
	//---buttonscalled---
	stuvsr(education,xScale,yScale,target,graph)
	perpvsr(education,xScale,yScale2,target,graph,margins)	
	mathvsr(education,xScale,yScale3,target,graph,margins)
	govtablebt(education,screen,xScale,yScale)
		
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
