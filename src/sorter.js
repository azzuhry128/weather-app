
export async function sorter(data) {
  console.log("sorting weather data...")

  const country = data.location.country
  const region = data.location.region
  const city = data.location.name
  const weather = data.current.condition.text
  const humidity = data.current.humidity
  const wind = data.current.wind_kph
  const temperature = data.current.temp_c

  const days = []

  for (let index = 0; index < data.forecast.forecastday.length; index++) {
    const date = data.forecast.forecastday[index].date;
    const timestamp = Date.parse(date)
    const day = new Date(timestamp)

    const dayOfWeek = day.toLocaleDateString('en-us', {weekday: "long"})
    days.push(dayOfWeek)
  }

  const forecast = await forecastSorter(data)

  const weatherObject = {country, region, city, weather, humidity, wind, temperature, forecast, days}
  console.log(weatherObject)
  console.log("data sorting finished...")
  return weatherObject
}

async function forecastSorter(data) {
  console.log("sorting forecast data...")
  const forecastArray = []
  const result = []
  const array = Object.entries(data.forecast.forecastday)
  const chunkSize = 24

  array.forEach(element => {
    // console.log(element[1])
    for (let data of element[1].hour) {
      const weather = data.condition.text
      const temp = data.temp_c
      const timeanddate = data.time
      const hour = timeanddate.split(" ")[1]
      const date = timeanddate.split(" ")[0]

      const object = {weather, temp, hour, date}
      forecastArray.push(object)
    }
  });

  for (let i = 0; i < forecastArray.length; i += chunkSize) {
    const chunk = forecastArray.slice(i, i + chunkSize).map(obj => JSON.parse(JSON.stringify(obj)));
    result.push(chunk);
  }

  return result
} 