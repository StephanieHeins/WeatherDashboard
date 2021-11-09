// API Key 
var APIKey = "c01d97f095828b431dc2973dc4fc0324"

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
  // .then(data => console.log(data))
  .then(data => {
    console.log(data)
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
    

  })
})






// Fetch forecast weather data 


// Fetch UV Index data 


// Search function 


// Save city search in LocalStorage 


// Render list of previous searches 


// Clear search history 

