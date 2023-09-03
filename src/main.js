// one module to rule them all !

import { currentInfoAssigner, forecastInfoAssigner } from "./render.js";
import { fetchData } from "./api/fetcher.js";

// const city = "bogor"
const apikey = "e4ae605484e64309af942928231308"
// const current = "current"
const forecast = "forecast"


// async function createWeatherObject(data) {
//   console.log("creating weather object...")

//   const country = data.location.country
//   const region = data.location.region
//   const city = data.location.name

//   const weather = data.current.condition.text
//   const humidity = data.current.humidity
//   const wind = data.current.wind_kph
//   const temperature = data.current.temp_c

//   const weatherObject = {country, region, city, weather, humidity, wind, temperature}
//   console.log("weather object created...")
//   return weatherObject
// }

// async function createForecastObject(data) {
//   console.log("creating forecasts object...")

//   const weatherDayOne = data.forecast.forecastday[0].hour
//   const weatherDayTwo = data.forecast.forecastday[1].hour
//   const weatherDayThree = data.forecast.forecastday[2].hour

//   const forecastData = {weatherDayOne, weatherDayTwo, weatherDayThree}
//   console.log(forecastData)
//   console.log("forecasts object created...")
//   return forecastData
// }

// used to generate object from current weather and forecasts
export async function weatherObjectFactory(geoLocation) { 
  const forecastUrl = `http://api.weatherapi.com/v1/${forecast}.json?key=${apikey}&q=${geoLocation}&days=3&aqi=no&alerts=no`
  try {
    console.log("starting weather factory...")
    const data = await fetchData(forecastUrl)

    const weatherObject = await createWeatherObject(data)
    const forecastObject = await createForecastObject(data)

    const assigner1 = await currentInfoAssigner(weatherObject)
    const assigner2 = await forecastInfoAssigner(forecastObject)

    const weatherData = {assigner1, assigner2}
    console.log("factory closed...")
    return weatherData
  } catch (error) {
    console.log(error)
  }
}