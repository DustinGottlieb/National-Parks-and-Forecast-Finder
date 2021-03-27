var form = document.querySelector("form");
var input = document.querySelector("input");
var searchBtn = document.querySelector(".searchButton");
var parks = document.querySelector(".parks");
var list = document.querySelector(".parkContainer");

var inputValue = "";
// var temp1Text = "";

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
        item.appendChild(weatherContainer);
        weatherContainer.appendChild(weatherBox1);
        weatherBox1.appendChild(date1);
        weatherBox1.appendChild(temp1);
        weatherBox1.appendChild(conditions1);

        item.setAttribute("class", "listItem");
        parkName.setAttribute("style", "font-size: 30px");
        description.setAttribute("class", "description");
        button.setAttribute("class", "weatherBtn");
        weatherContainer.setAttribute("class", "weatherContainer");
        weatherBox1.setAttribute("class", "weatherBox");
        button.textContent = "Check Weather ⛅";
      }

      var parkNumber = response.data;

      function weather() {
        var latitude = response.data[i].latitude;
        var longitude = response.data[i].longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly,alerts&appid=559a0a1d51db545bab6fe7ef56826991`
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            console.log(response);

            // for (var i = 0; i < parkNumber.length; i++) {
            temp1.textContent = "Temp: " + response.daily[1].temp.day;
            // parkNumber[i++];
            // }
          });
      }

      for (var i = 0; i < parkNumber.length; i++) {
        var item = document.createElement("li");
        var parkName = document.createElement("p");
        var description = document.createElement("p");
        var button = document.createElement("button");
        var weatherContainer = document.createElement("div");
        var weatherBox1 = document.createElement("div");
        var date1 = document.createElement("p");
        var temp1 = document.createElement("p");
        var conditions1 = document.createElement("p");

        listItems();

        parkName.textContent = response.data[i].fullName;
        description.textContent = response.data[i].description;
        date1.textContent = moment().add(1, "days").format("dd l");
        temp1.textContent = "Temp";
        conditions1.textContent = "Conditions";

        weather();

        form.reset();
      }

      button.addEventListener("click", function () {
        weatherBox1.setAttribute("style", "display: block");
      });
    });
});
