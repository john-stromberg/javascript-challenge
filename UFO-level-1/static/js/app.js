// from data.js
var tableData = data;
// select the table body
var tbody = d3.select("tbody");

console.log(data);

// loop through and console log each UFO event
data.forEach(function(ufoEvent) {
    console.log(ufoEvent);
});

// append table
data.forEach(function(ufoEvent) {
    console.log(ufoEvent);
    var row = tbody.append("tr");
    Object.entries(ufoEvent).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
 
// select the button
var button = d3.select("#button");

button.on("click", function(){
    d3.select(".summary").html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    filteredData.forEach((filteredDate) => {
        var row = tbody.append("tr");
        Object.entries(filteredDate).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });  
});

