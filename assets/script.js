var input = document.querySelector("input");
var form = document.querySelector("form");
var searchBtn = document.querySelector(".searchButton");
var parks = document.querySelector(".parks");
var weather = document.querySelector(".weather");
var list = document.querySelector(".list-group");
var form = document.querySelector("form");
var inputValue = "";

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    inputValue = input.value;
    list.innerHTML = "";
    console.log(inputValue);

    fetch(
            "https://developer.nps.gov/api/v1/parks?stateCode=" +
            inputValue +
            "&api_key=lgFCFNbkwBuzzWQoYnMJzc4aPB8HHSXAZcZYbbIH"
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                var items = document.createElement("li");
                var parkName = document.createElement("h3");
                var description = document.createElement("p");
                var parkImage = document.createElement("img");
                var button = document.createElement("button");
                var weatherBox = document.createElement("div");
                var days = "";

                var parkImage = document.createElement('img');
                parkImage.src = response.data[i].images[0].url;

                let longitude = response.data[i].longitude;
                let latitude = response.data[i].latitude;

                button.addEventListener("click", function(e) {
                    fetch(
                            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly,alerts&appid=559a0a1d51db545bab6fe7ef56826991`
                        )
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(response) {
                            console.log(response);

                            if (days != "") {
                                days = "";
                            }

                            for (let x = 0; x < 5; x++) {
                                days =
                                    days +
                                    `<li class="day"><div class="date">${moment.unix(response.daily[x].dt).format("dd l")}</div>
                    <img class="icon" src="http://openweathermap.org/img/wn/${response.daily[x].weather[0].icon}@2x.png"></img>
                    <div class="temp">Temp: ${Math.round(response.daily[x].temp.day)}°</div>
                    <div class="condition">${response.daily[x].weather[0].description}</div></li>`;
                            }
                            weatherBox.innerHTML = `<ol class="weather-box">${days}</ol>`;
                            e.target.parentNode.appendChild(weatherBox);
                        });
                });

                listItem();

                form.reset();

                button.textContent = "Local Weather ⛅";
                parkName.textContent = response.data[i].fullName;
                description.textContent = response.data[i].description;
            }

            function listItem() {
                list.appendChild(items);
                items.appendChild(parkImage);
                items.appendChild(parkName);
                items.appendChild(description);
                items.appendChild(button);

                items.setAttribute("class", "list");
                parkName.setAttribute("class", "ParkName");
                description.setAttribute("class", "description");
                button.setAttribute("class", "buttonBtn");
                parkImage.setAttribute("class", "parkImage");
            }
        });
});