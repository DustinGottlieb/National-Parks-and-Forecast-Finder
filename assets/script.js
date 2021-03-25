var form = document.querySelector("form");
var input = document.querySelector("input");
var searchBtn = document.querySelector(".searchButton");
var parks = document.querySelector(".parks");
var list = document.querySelector(".parkContainer");
var weather = document.querySelector(".weather");
var weatherBox = document.createElement("div");
var date = document.createElement("p");
var temp = document.createElement("p");
var conditions = document.createElement("p");
var inputValue = "";

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  list.innerHTML = "";
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
        item.appendChild(weatherBox);
        weatherBox.appendChild(date);
        weatherBox.appendChild(temp);
        weatherBox.appendChild(conditions);
        item.setAttribute("class", "listItem");
        parkName.setAttribute("style", "font-size: 30px");
        description.setAttribute("class", "description");
        button.setAttribute("class", "weatherBtn");
        button.textContent = "Check Weather ⛅";
      }

      for (var i = 0; i < response.data.length; i++) {
        var item = document.createElement("li");
        var parkName = document.createElement("p");
        var description = document.createElement("p");
        var button = document.createElement("button");
        // button.setAttribute("id", response.data[i].longitude.toString());

        // button.addEventListener("click", function() {
        var longitude = response.data[i].longitude;
        var latitude = response.data[i].latitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly,alerts&appid=e855ba782204791deaddac674c970432`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            console.log(response);
          });

        for (var i = 0; i < 5; i++) {
          
          date.textContent = moment().format("dd l");
        }

        // TODO: connect coordinates to OpenWeather one call API
        // TODO: attach relevant data to page

        // })

        listItems();

        parkName.textContent = response.data[i].fullName;
        description.textContent = response.data[i].description;

        form.reset();
      }
    });
});
