var input = document.querySelector("input");
var form = document.querySelector("form");
var searchBtn = document.querySelector(".searchButton");
var parks = document.querySelector(".parks");
var weather = document.querySelector(".weather");
var list = document.querySelector(".list-group");
var form = document.querySelector("form");
var inputValue = "";
var docQuote = document.querySelector("#quote");
var Quotes = [
  "“Between every two pine trees there is a door leading to a new way of life.”-John Muir",

  "“I only went out for a walk, and finally concluded to stay out till sundown, for going out, I found, was really going in.”-John Muir",

  "“The clearest way into the Universe is through a forest wilderness.” -John Muir",

  "“National parks are the best idea we ever had. Absolutely American, absolutely democratic, they reflect us at our best rather than our worst.”-Wallace Stegner",

  "“In every walk with nature one receives far more than they seek.”-John Muir",

  "“One touch of nature makes the whole world kin.”-William Shakespeare",

  '"National parks and reserves are an integral aspect of intelligent use of natural resources. It is the course of wisdom to set aside an ample portion of our natural resources as national parks and reserves, thus ensuring that future generations may know the majesty of the earth as we know it today." ~ John F. Kennedy',

  '"Some national parks have long waiting lists for camping reservations. When you have to wait a year to sleep next to a tree, something is wrong." ~ George Carlin',

  '"What a joy it is to feel the soft, springy earth under my feet once more, to follow grassy roads that lead to ferny brooks where I can bathe my fingers in a cataract of rippling notes, or to clamber over a stone wall into green fields that tumble and roll and climb into riotous gladness!" — Helen Keller',

  '"The wilderness and the idea of wilderness is one of the permanent homes of the human spirit." — Joseph Wood Krutch',

  '"The wilderness holds answers to questions man has not yet learned to ask." — Nancy Newhall',
];
var z = Math.floor(Math.random() * (Quotes.length - 1));
docQuote.innerHTML = Quotes[z];

renderLastInput();

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  inputValue = input.value;
  list.innerHTML = "";
  console.log(inputValue);

  localStorage.setItem("stateName", inputValue);

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

      for (let i = 0; i < response.data.length; i++) {
        var items = document.createElement("li");
        var parkName = document.createElement("h3");
        var description = document.createElement("p");
        var parkImage = document.createElement("img");
        var button = document.createElement("button");
        var weatherBox = document.createElement("div");
        var days = "";

        var parkImage = document.createElement("img");
        parkImage.src = response.data[i].images[0].url;
        parkImage.alt = response.data[i].images[0].altText;

        let longitude = response.data[i].longitude;
        let latitude = response.data[i].latitude;

        button.addEventListener("click", function (e) {
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly,alerts&appid=559a0a1d51db545bab6fe7ef56826991`
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              console.log(response);

              if (days != "") {
                days = "";
              }

              for (let x = 0; x < 5; x++) {
                days =
                  days +
                  `<li class="day"><div class="date">${moment
                    .unix(response.daily[x].dt)
                    .format("dd l")}</div>
                    <img class="icon" src="http://openweathermap.org/img/wn/${
                      response.daily[x].weather[0].icon
                    }@2x.png"></img>
                    <div class="temp">Temp: ${Math.round(
                      response.daily[x].temp.day
                    )}°</div>
                    <div class="condition">${
                      response.daily[x].weather[0].description
                    }</div></li>`;
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

function renderLastInput() {
  var lastInput = localStorage.getItem("stateName");

  if (!lastInput) {
    return;
  }

  input.value = lastInput;
}
