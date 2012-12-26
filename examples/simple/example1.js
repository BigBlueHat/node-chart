var ee = require('events').EventEmitter;
var nodechart = require('../../index.js');
var datasource = new ee;
$(window).ready(function() {
    var chart = new nodechart.Chart();
    chart.series(datasource);
    chart.to(document.getElementById('mycanvas'));
    setInterval(function() {
        datasource.emit('data',Math.floor(Math.random()*100));
    },1000);
});
