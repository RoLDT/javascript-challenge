// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime").property("value");

    var inputCity = d3.select("#cityname").property("value");

    var inputState = d3.select("#statename").property("value");

    var inputCountry = d3.select("#countryname").property("value");

    var inputShape = d3.select("#shape").property("value");


    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    var filteredData = tableData;

    if (inputDate) {
        filteredData = filteredData.filter(alien => alien.datetime === inputDate);
    }
    if (inputCity) {
        filteredData = filteredData.filter(alien => alien.city === inputCity);
    }
    if (inputState) {
        filteredData = filteredData.filter(alien => alien.state === inputState);
    }
    if (inputCountry) {
        filteredData = filteredData.filter(alien => alien.country === inputCountry);
    }
    if (inputShape) {
        filteredData = filteredData.filter(alien => alien.shape === inputShape);
    }


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