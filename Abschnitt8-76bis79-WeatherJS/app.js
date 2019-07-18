// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//
// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("state").value

  // Set Location in LS
  storage.setLocationData(city, country);

  // Change the location
  weather.changeLocation(city,country);

  // Get and display weather
  getWeather();

  // Close modal: necessary to use jQuery
  $("#locModal").modal("hide");

})


function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
