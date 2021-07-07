// from data.js
var tableData = data;
// select the table body
var tbody = d3.select("#tbody");

data.forEach(function(ufoFinder) {
    console.log(ufoFinder);
    var row = tbody.append("tr");
    Object.entries(ufoFinder).forEach(function([key, value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// from data.js
var tableData = data;
// select the table body
var tbody = d3.select("#tbody");
// loop through data and console log each UFO event
data.forEach(function(ufoFinder) {
    console.log(ufoFinder);
    // append table row for each event
    var row = tbody.append("tr");
    Object.entries(ufoFinder).forEach(function([key, value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
