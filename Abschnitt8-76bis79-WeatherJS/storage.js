
class Storage {
  constructor(city = "Miami", country = "FL") {
    this.city  = city;
    this.country = country;
  }

  getLocationData() {
    // here we do not need to check for country, because if it is already setted
    // for city, it is of course setted by country!
    if(localStorage.getItem("city") !== null) {
      this.city = localStorage.getItem("city");
      this.country = localStorage.getItem("country");
    }
    return {
      city: this.city,
      country: this.state
    }
  }

  setLocationData(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
}
