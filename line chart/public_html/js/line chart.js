$(document).ready(function () {
    var dataset = [{x: 10, y: 50}, {x: 20, y: 20}, {x: 40, y: 10}, {x: 60, y: 40}, {x: 80, y: 5}, {x: 100, y: 30}];
    var h = 500;
    w = 600;
    p = 40;
    var x = d3.scale.linear()
            .domain([0, d3.max(dataset, function (d) {
                    return d.x;
                })])
            .range([p, w - p]);
    var y = d3.scale.linear()
            .domain([0, d3.max(dataset, function (d) {
                    return d.y;
                })])
            .range([h - p, p]);
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

    var yAxis = d3.svg.axis()
            .scale(y)
            .ticks(5)
            .orient('left');
    var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("padding", p)
            .style("border", "1px solid black");

    svg.selectAll("circle")
            .data(dataset)
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
    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - p) + ")")
            .call(xAxis);
    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + p + ",0)")
            .call(yAxis);
    var drawline = d3.svg.line()
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y);
            });
    var path = svg.append('path')
            .attr('d', drawline(dataset))
            .attr('stroke', 'blue')
            .attr('stroke-width', '3')
            .attr('fill', 'none');
});

