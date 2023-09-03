export async function render(data) {
  console.log("rendering elements...")

  const forecastWrapper = document.getElementById("forecast-container")

  data.forEach((object) => {
  const wrapper = document.createElement("div")
  const clock = document.createElement("h1")
  const weatherIcon = document.createElement("img")
  const temp = document.createElement("h1")

  wrapper.classList.add("p-2", "gap-x-2" ,"text-center")

    clock.textContent = object.hour
    temp.textContent = object.temp
    
    wrapper.appendChild(clock)
    wrapper.appendChild(temp)

    forecastWrapper.appendChild(wrapper)
    // console.log(wrapper)
  })
  console.log("render finished...")
}

export async function currentInfoAssigner(currentData) {
  console.log("assigning current weather info...")

  const region = currentData.region
  const city = currentData.city
  const weather = currentData.weather
  const temp = currentData.temperature
  const wind = currentData.wind

  const assignedInfo = {region, city, weather, temp, wind}
  console.log("finished...")
  return assignedInfo
}

export async function forecastInfoAssigner(forecastData) {
  console.log("assigning forecast info...")
  const sortedInfo = await forecasatInfoSorter(forecastData)
  const assigned = await elementGenerator(sortedInfo)
  console.log("assignation finished...")
  return assigned
}

function getElements() {
  console.log("getting elements...")
  const region = document.getElementById("region")
  const city = document.getElementById("city")
  const forecast = document.getElementById("forecast")
  const temp = document.getElementById("temp")

  const elementHolders = {city, temp, forecast, region}
  return elementHolders
}

export async function assignElements(weatherData) {
  console.log("initiating values insertion...")
  const data = weatherData.assigner1
  console.log(data)
  const elements = getElements()
  console.log(elements)

  const region = elements.region.append(data.region)
  const city = elements.city.append(data.city)
  const forecast = elements.forecast.append(data.weather)
  const temp = elements.temp.append(data.temp + '℃')

  const assignElements = {region, city, forecast, temp}
  console.log("elements rendered...")
  return assignElements
}