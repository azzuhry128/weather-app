// one module to rule them all !
import { fetchData } from "./fetcher.js";
import { geoLocator } from "./geolocator.js";
import { forecastRenderer, render } from "./render.js";
import { sorter } from "./sorter.js";

// const city = "bogor"
const apikey = "e4ae605484e64309af942928231308"
// const current = "current"
const forecast = "forecast"


// used to generate object from current weather and forecasts
export async function main() { 
  try {
    console.log("starting weather factory...")
    const geocode = await geoLocator()
    const requestUrl = `http://api.weatherapi.com/v1/${forecast}.json?key=${apikey}&q=${await geocode}&days=3&aqi=no&alerts=no`
    const data = await fetchData(await requestUrl)
    const sortedData = await sorter(await data)
    eventDetector(await sortedData)
    console.log("factory closed...")
    return 
  } catch (error) {
    console.log(error)
  }
}


async function eventDetector(data) {
  const first = document.getElementById("dayOne")
  const second = document.getElementById("dayTwo")
  const third = document.getElementById("dayThree")

  render(data, "render-first")

  first.addEventListener("render-first", () => {
    document.getElementById("forecast-container")
    console.log("first element render event detected...")
    const elementsToRemove = document.querySelectorAll('#forecast-data');
    elementsToRemove.forEach(element => element.remove());
    forecastRenderer(data, "render-first")
  })

  second.addEventListener("render-second", () => {
    console.log("second element render event detected...")
    const elementsToRemove = document.querySelectorAll('#forecast-data');
    elementsToRemove.forEach(element => element.remove());
    forecastRenderer(data, "render-second")
  })

  third.addEventListener("render-third", () => {
    console.log("third element render event detected...")
    const elementsToRemove = document.querySelectorAll('#forecast-data');
    elementsToRemove.forEach(element => element.remove());
    forecastRenderer(data, "render-third")
  })
}
