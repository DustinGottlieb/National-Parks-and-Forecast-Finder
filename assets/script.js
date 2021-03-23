var input = document.querySelector("input");
var searchBtn = document.querySelector(".searchButton");
var parks = document.querySelector(".parks");
var list = document.querySelector(".parkContainer");
var weather = document.querySelector(".weather");
var inputValue = "";

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  inputValue = input.value;
  console.log(inputValue);

  fetch(
    "https://developer.nps.gov/api/v1/parks?stateCode=" +
      inputValue +
      "&api_key=lgFCFNbkwBuzzWQoYnMJzc4aPB8HHSXAZcZYbbIH"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      function listItems() {
        list.appendChild(item);
        item.appendChild(parkName);
        item.appendChild(description);
        item.appendChild(button);
        item.setAttribute("class", "listItem");
        parkName.setAttribute("style", "font-size: 30px");
        description.setAttribute("class", "description");
        button.setAttribute("class", "weatherBtn");
        button.textContent = "Check Weather";
      }

      for (var i = 0; i < response.data.length; i++) {
        var item = document.createElement("li");
        var parkName = document.createElement("p");
        var description = document.createElement("p");
        var button = document.createElement("button");

        listItems();

        parkName.textContent = response.data[i].fullName;
        description.textContent = response.data[i].description;
      }
    });
});

// TODO: Add listener to button
// TODO: Attach button to input field
// TODO: prevent default
// TODO: Fetch data from both APIs relating to zip code
// TODO: local storage previous search inside input field
// TODO: In parks section, display list of relevant parks
// TODO: In weather section, display 7-day forecast
