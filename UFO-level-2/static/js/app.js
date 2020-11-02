// from data.js
var tableData = data;

// YOUR CODE HERE!

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElementDate = d3.select("#datetime");

    var inputValueDate = inputElementDate.property("value");

    var inputElementCity = d3.select("#cityname");

    var inputValueCity = inputElementCity.property("value");

    var inputElementState = d3.select("#statename");

    var inputValueState = inputElementState.property("value");

    var inputElementCountry = d3.select("#countryname");

    var inputValueCountry = inputElementCountry.property("value");

    var inputElementShape = d3.select("#shape");

    var inputValueShape = inputElementShape.property("value");

    console.log(inputValueDate);
    console.log(inputValueCity);
    console.log(inputValueState);
    console.log(inputValueCountry);
    console.log(inputValueShape);

    var filteredData = tableData.filter(alien => alien.datetime === inputValueDate && 
        alien.city === inputValueCity && alien.state === inputValueState && alien.country === inputValueCountry && alien.shape === inputValueShape);

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