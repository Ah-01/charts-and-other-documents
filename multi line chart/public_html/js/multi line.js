$(document).ready(function () {
    var data = [{x: 10, y: 14}, {x: 20, y: 32}, {x: 30, y: 54}, {x: 40, y: 32}, {x: 50, y: 49}, {x: 60, y: 76}];
    var data2 = [{x: 30, y: 23}, {x: 20, y: 45}, {x: 60, y: 43}, {x: 40, y: 24}, {x: 54, y: 67}, {x: 80, y: 56}];
    var w = 600,
            h = 400,
            p = 40;
    var svg = d3.selectAll("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("border", "1px solid black");

    var x = d3.scale.linear()
            .domain([10, 80])
            .range([p, w - p]);
    var y = d3.scale.linear()
            .domain([14, 76])
            .range([h - p, p]);
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');
    var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left');
    svg.selectAll("svg:g")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
                return x(d.x);
            })
            .attr("cy", function (d) {
                return y(d.y);
            })
            .attr("r", 5)
            .attr("fill", "red")
            .attr("stroke", "pink")
            .attr("stroke-width", "1px");
    console.log(svg.select("circle"))
    svg.select("circle")
            .data(data2)
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
                return x(d.x);
            })
            .attr("cy", function (d) {
                return y(d.y);
            })
            .attr("r", 5)
            .attr("fill", "blue")
            .attr("stroke", "green")
            .attr("stroke-width", "1px");



});