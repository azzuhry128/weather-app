import { weatherObjectFactory } from "./src/main.js";
import { getLocation } from "./src/geolocator.js";
import { search } from "./src/search.js";
import { render } from "./src/render.js";
import { uploadGeolocation, uploadWeather } from "./src/database/upload.js";

const data = []

//all necessary function must be called right here
window.onload = () => {
  main()
}

//just kidding its should be here 
async function main() {
  if(localStorage.getItem("geolocation") && localStorage.getItem("weather")) {
    console.log("data not exist, calling geolocator...")
  } else {
    console.log("data exist, calling render...")
  }
  // const location = await getLocation()
  // const weatherData = await weatherObjectFactory(await location)
  // render(await weatherData)
}

function checkLocalStorage() {
  if(localStorage.getItem("geolocation")) {
    console.log("data exist")
  } else {
    console.log("data not exist, calling geolocator...")
  }
}

// call fetcher -> assigner -> renderer upon windows.onLoad event
// rendered must wait for assigner, and assigner must wait for fetcher
// after all is checked then data will be rendered

// every function is asynchronous
// you may display loading screen while waiting for data to be retrieved

// createWeatherObject()



