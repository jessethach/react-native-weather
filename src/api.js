import _ from 'lodash';
const API_KEY = 'Enter key here';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' °F';
}

export default function(latitude, longitude) {
  var url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;
  return fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      return {
        city: responseData.name,
        temperature: kelvinToF(responseData.main.temp),
        description: _.capitalize(responseData.weather[0].description)
      }
    });
}
