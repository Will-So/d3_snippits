json.results //In order to get the json files directly. 

d.year // In order to load particular JSON Files

.attr("fill", function(d,i) {return "rgb(0, 0, " + (Math.round(d.percentage * 10000)) + ")"; //need to do math.round to avoid decismal percentages. 


svg.selectAll('text.labels') //do .labels to avoid overriding the thing in future times
    .data(data)
    .enter()
    .append('text')
    .text(function(d,i) {return d.year;})
    .attr('y',370)
    .attr('x',function(d,i) { return i * 35+3; })
    .attr('font-size',12);

// y goes down instead of up. 

// em = font-dependent measure

.append('g')

.attr('d', line(d))

// Good idea to put d3 vis in something else. 

//js.fiddle is a good dev environment

// Create a margin object for top right bottom and left

// g is just a group element and it has them all. 

// good idea to write those 8 lines down
