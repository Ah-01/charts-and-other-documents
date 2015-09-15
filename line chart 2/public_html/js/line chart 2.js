$(document).ready(function () {
    var h = 500, //height!
            w = 600, //width!
            p = 40;//padding!

    // svg formation
    var svg = d3.select("body")
            .append("svg")
            .attr("height", h)
            .attr("width", w)
            .style("border", "1px solid black");

    //data manipulation from csv file
    d3.csv("data.csv", function (error, data) {
        var x = d3.scale.linear()
                .domain([0, d3.max(data, function (d) {
                        return d.x;
                    })])
                .range([p, w - p]);
        var y = d3.scale.linear()
                .domain([0, d3.max(data, function (d) {
                        return d.y;
                    })])
                .range([h - p, p]);

        //Axis formation

        var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom');

        var yAxis = d3.svg.axis()
                .scale(y)
                .ticks(5)
                .orient('left');
        svg.selectAll("circle")
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
        svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + (h - p) + ")")
                .call(xAxis);
        svg.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(" + p + ",0)")
                .call(yAxis);

        //joining of data circle through line 
        var drawline = d3.svg.line()
                .x(function (d) {
                    return x(d.x);
                })
                .y(function (d) {
                    return y(d.y);
                });
        var path = svg.append('path')
                .attr('d', drawline(data))
                .attr('stroke', 'blue')
                .attr('stroke-width', '3')
                .attr('fill', 'none');
    });

});