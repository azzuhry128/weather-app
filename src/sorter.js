export async function sorter(data) {
  console.log("sorting weather data...")
  const country = data.location.country
  const region = data.location.region
  const city = data.location.name
  const weather = data.current.condition.text
  const humidity = data.current.humidity
  const wind = data.current.wind_kph
  const temperature = data.current.temp_c

  const forecast = await forecastSorter(data)

  const weatherObject = {country, region, city, weather, humidity, wind, temperature, forecast}
  console.log("weather data sorting finished...")
  return weatherObject
}

async function forecastSorter(data) {
  console.log("sorting forecast data...")
  const forecastArray = []
  console.log("sorting forecast info...")
  const array = Object.entries(data)
  array.forEach(element => {
    // console.log(element[1])
    for (let data of element[1]) {
      const weather = data.condition.text
      const temp = data.temp_c
      const timeanddate = data.time
      const hour = timeanddate.split(" ")[1]
      const date = timeanddate.split(" ")[0]

      const object = {weather, temp, hour, date}
      forecastArray.push(object)
    }
  });
  console.log("sorting finished...")
  console.log("forecast data sorting finished...")
  return forecastArray
}