export async function fetchData(forecastUrl) {
  // const fetchWeatherData = await fetch(weatherUrl)

  const response = await fetch(forecastUrl)
    .then(console.log("fetching weather data..."))
    .then(response => response.json())
    .finally(console.log("fetching finished"))
  console.log(response)
  return response
}

