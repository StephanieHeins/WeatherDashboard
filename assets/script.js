// API Key 
var APIKey = "c01d97f095828b431dc2973dc4fc0324"

//Global variables 
//var city = $('#cityinput').val(); --- This was not working for some reason so changed to use regular JS
var city = document.querySelector("#cityinput");
var button = document.querySelector('.button');


// Fetch current weather data 
button.addEventListener('click', function(){
  console.log("Test");
  event.preventDefault();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey;
  fetch(queryURL)
  .then(response => response.json())
  .then(data => console.log(data))
})


// Fetch forecast weather data 


// Fetch UV Index data 


// Search function 


// Save city search in LocalStorage 


// Render list of previous searches 


// Clear search history 

