
class Weather {
  constructor(city, country) {
    this.apiKey = "b2c6ce38253d0534cd2e732112aacc0a";
    this.city = city;
    this.country = country;
  }

  // fetch weather from api
  async getWeather() {
    // const response = await fetch (`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    return responseData;
    // return responseData.current_observation;
  }

  // Change weather Location
  changeLocation(city, country) {
    tthis.city = city;
    this.country = country;
  }
}
