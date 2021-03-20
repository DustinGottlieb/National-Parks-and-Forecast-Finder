var input = document.querySelector("input");
var searchBtn = document.querySelector(".searchButton");
var parks = document.querySelector(".parks");
var weather = document.querySelector(".weather");
var inputValue = "";

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    inputValue = input.value;
    console.log(inputValue);

    fetch("https://developer.nps.gov/api/v1/parks?stateCode="+inputValue+"&api_key=lgFCFNbkwBuzzWQoYnMJzc4aPB8HHSXAZcZYbbIH")
        .then (function(response) {
            console.log(response.body);
        })


});


// TODO: Add listener to button 
// TODO: Attach button to input field
// TODO: prevent default
// TODO: Fetch data from both APIs relating to zip code
// TODO: local storage previous search inside input field
// TODO: In parks section, display list of relevant parks
// TODO: In weather section, display 7-day forecast

