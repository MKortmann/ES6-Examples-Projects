

//  User Interface class
class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `Temp: ${weather.main.temp} °C`;
    this.icon.textContent = `${weather.weather[0].icon}`;
    this.iconSet(`${weather.weather[0].description}`);
    // this.icon.setAttribute("src", "./svg/rainy-1.svg");
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.dewpoint.textContent = `Temp-min: ${weather.main.temp_min} °C, Temp-max: ${weather.main.temp_min} °C`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} meter/sec`
  }

// fast way to implement some animation!
  iconSet(description) {
    console.log(description);
    switch(description) {
      case "clear sky":
        this.icon.setAttribute("src", "./svg/day.svg");
        break;
      case "few clouds":
        this.icon.setAttribute("src", "./svg/cloudy-day-1.svg");
        break;
      case "scattered clouds":
        this.icon.setAttribute("src", "./svg/cloudy-day-2.svg");
        break;
      case "broken clouds":
        this.icon.setAttribute("src", "./svg/cloudy.svg");
        break;
      case "rain":
        this.icon.setAttribute("src", "./svg/rainy-1.svg");
        break;
      case "shower rain":
        this.icon.setAttribute("src", "./svg/rainy-6.svg");
        break;
      case "thunderstorm":
        this.icon.setAttribute("src", "./svg/thunder.svg");
        break;
      case "snow":
        this.icon.setAttribute("src", "./svg/snowy-1.svg");
        break;
      case "mist":
        this.icon.setAttribute("src", "./svg/weather.svg");
        break;
      default:
        this.icon.setAttribute("src", "./svg/day.svg");
    }
  }
}
