/* TEMPLATES FOR DATA LOADING & MANIPULATION
==============================================================================*/

/*jslint node:true */
//"use strict";

/* LOAD CSV DATA
=============== */

d3.csv('testData/c.csv', (err,data) => {
  if(err){
    console.log('err' + err);
  }
  else{
    dataVisual(data);
  }
});

//Retrieve base values for future graphs
function runDataMeasure(data){
  d3.min(data ,(el)=> {
    return +el.population;
  });
  d3.max(data ,(el)=> {
    return +el.population;
  });
  d3.mean(data ,(el)=> {
    return +el.population;
  });
}

function dataVisual(data){
  d3.select('body').selectAll('div.cities')
                   .data(data)
                   .enter()
                   .append('div')
                   .attr('class', 'cities')
                   .html((d,i) => {
                     return d.label;
                   });
}

/* LOAD JSON DATA
=============== */

d3.json('testData/tweets.json', (err,data) => {
  if(err){
    console.log('err' + err);
  }
  else{
    console.log(data);
  }
});

/* TEMP DATABASE
=============== */

const basicData = [14, 68, 24500, 430, 19, 1000, 5555];

//LINEAR SCALE  --> Numerical data in rougly the same area
//Create a numerical scale to display large values relative to smaller
var yscale = d3.scale.linear().domain([0,24500])
                              .range([0,500]);

//POLYLINEAR SCALE --> Numerical data with widely diverging values
var plYscale = d3.scale.linear.domain([0,100,1000,24500])
                              .range([0,50,75,100]); 


/*
1. x axis is -> accross!
2. y axis is ^ below/above!
*/

//Normal visualization without numerical scaling
d3.select("svg").selectAll('rect')
                .data(basicData)
                .enter()
                .append('rect')
                .attr('width', 30)
                .attr('height', (d)=> {
                  return d;
                })
                .style('fill', 'blue')
                .style('stroke', 'red')
                .style('stroke-width', '1px')
                .style('opacity', .25)
                .attr('x', (d,i) => {
                  return i * 30;
                })
                .attr('y', (d,i) => {
                  return 100 - d;
                });
