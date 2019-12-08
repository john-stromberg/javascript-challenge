// from data.js
var tableData = data;
// select the table body
var tbody = d3.select("tbody");

console.log(data);

// loop and through and console log each UFO event
data.forEach(function(ufoEvent) {
    console.log(ufoEvent);
});

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
    var inputElement = d3.select("#button");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(data => data.datetime === inputValue);
    
    console.log(filteredData);
});
