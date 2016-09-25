/* LOAD DATA FROM CSV PROJECT
==============================================================================*/

d3.csv('../testData/c.csv', (err,data) => {
  if(err){
    console.log(`Error : ${err}`);
  }
  else{
    dataVisual(data);
  }
});

function dataVisual(data){

  //Get the maximum population integer to for scaling puproses
  var maxPopulation = d3.max(data, (city) => {
    return parseInt(city.population);
  });

  //Create a relative y Scale from the maximum population
  var yScale = d3.scaleLinear().domain([0, maxPopulation])
                       .range([0, 460]);

  //Create bar chart
  d3.select('svg').attr('style', 'height: 480px; width: 600px')
                  .selectAll('rect')
                  .data(data)
                  .enter()
                  .append('rect')
                  .attr('width', 50)
                  .attr('height', (d) => {
                    return yScale(parseInt(d.population)); //Scale to set yScale
                  })
                  .attr('x', (d,i) => {                   //push to right by 60
                    return i * 60;
                  })
                  .attr('y', (d) => {                     //Bars start at bottom
                    return 480 - yScale(parseInt(d.population));
                  })
                  .style('fill', "#90a4ae")
                  .style('stroke', '#37474f')
                  .style('stroke-width','1px')
                  .style('opacity', .75);

}
