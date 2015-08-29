        var text = svg.selectAll('text')
                    .data(dataset)
                    .enter()
                    .append('text')
                    .text(function(d){
                        return d;
                    });

        text.attr('x', function(d, i){
            return i * (w / dataset.length);
            })
            .attr('y', function(d){
            return h - (d * multiplier);
            });
