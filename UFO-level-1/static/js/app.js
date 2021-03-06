// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value")

    console.log(inputValue)

    var filteredData = tableData.filter(alien => alien.datetime === inputValue);

    console.log(filteredData);

    var tableBody = d3.select("tbody");

    tableBody.html("");

    filteredData.forEach((alien) => {
        var row = tableBody.append("tr");
        Object.entries(alien).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}