var tableData = data;
console.log(data);
//select the table body 
var tbody = d3.select("tbody");
//create and append table body with UFO event data
data.forEach(function(ufoEvent) {
    console.log(ufoEvent);
    var row = tbody.append("tr");
    Object.entries(ufoEvent).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
 
//select the button
var button = d3.select("#filter-btn-date");
//button filter function
button.on("click", function(){
    //clear table 
    tbody.html("");
    d3.event.preventDefault();
    //console log to test button function
    console.log("You have clicked the filter button");
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //create filter to filter on date data based on input value
    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData);
    //append filtered data to table body 
    filteredData.forEach((filteredDate) => {
        var row = tbody.append("tr");
        Object.entries(filteredDate).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });  
});