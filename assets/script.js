// API Key 
const APIKey = "c01d97f095828b431dc2973dc4fc0324"

//Global variables 
var button = document.querySelector('.button');
var cityInput = document.querySelector('#cityInput');
var cityName = document.querySelector('#cityName');
var iconId = document.querySelector('#iconId');
var tempId = document.querySelector('#tempId');
var windId = document.querySelector('#windId');
var humidId = document.querySelector('#humidId');
var uvId = document.querySelector('#uvId');

// Todays Date
var createDate = new Date();
monthNum = createDate.getMonth();
month = monthNum.toString();
dayNum = createDate.getDate();
day = dayNum.toString();
yearNum = createDate.getFullYear();
year = yearNum.toString();
var today = month + "/" + day + "/" + year;
document.getElementById("currentDate").innerHTML = today;

// Fetch current weather data 
button.addEventListener('click', function(){
  console.log("Test");
  event.preventDefault();
  let city = $('#cityinput').val();

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  fetch(queryURL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    saveCity();
    // JSON Data 
    var nameVal = data.name;
    var tempVal = Math.floor(data.main.temp);
    var iconVal = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var humidVal = data.main.humidity;
    var windVal = Math.floor(data.wind.speed);

    // Data to HTML
    cityName.innerHTML = nameVal;
    $('#iconId').attr('src', iconVal);
    tempId.innerHTML = tempVal + "F";
    humidId.innerHTML = humidVal + "%";
    windId.innerHTML = windVal + "MPH";

    // UV Data Fetch 
    let latitude = data.coord.lat;
    let longitude = data.coord.lon;
    let uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?&units=imperial&appid=885e9149105e8901c9809ac018ce8658&q=" +
    "&lat=" +
    latitude +
    "&lon=" +
    longitude;

    fetch(uvQueryURL)
    .then(response => response.json())
        // UV Data to HTML
        .then((data) => {
            console.log(data)
            let uvVal = data[0].value;
            uvId.innerHTML = uvVal;
            if (uvVal>=0 && uvVal<3){
                $('#uvId').attr("class", "text-success");
            } else if (uvVal>=3 && uvVal<8){
                $('#uvId').attr("class", "text-wawrning");
            } else if (uvVal>=8){
                $('#uvId').attr("class", "text-danger");
            }
        })
  })

    // Fetch forecast data from API: https://openweathermap.org/forecast16
    let fcQueryURL = "api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5&appid=" + APIKey;
    fetch(fcQueryURL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
  
      })

    .catch(err => alert("Please enter a valid city name."))
  })

// City Search History 
var saveCity = () => {
  let city = $('#cityinput').val();
    localStorage.setItem("cities", city);
   // var history = $("<ul>").addClass("list-group list-group-flush").text(localStorage.getItem("cities"))
   for (let i = 0; i < localStorage.length; i++) {
    let cityEl = localStorage.getItem("cities" + i);
    $("#historylist").prepend(cityEl);
}
}

// Clear search history 
$("#clear").on("click", (event) => {
  localStorage.clear();
  saveCity();
})

