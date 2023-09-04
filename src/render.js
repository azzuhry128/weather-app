export async function render(data, order) {
  console.log("rendering data...")
  const forecastWrapper = document.getElementById("forecast-container")

  const switchedData = await switcher(data, order)

  currentInfoRenderer(data, await getCurrentElements())
  daysRenderer(data, await getDaysElements())

  switchedData.forEach((object) => {
  const wrapper = document.createElement("div")
  const clock = document.createElement("h1")
  // const weatherIcon = document.createElement("img")
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

async function getCurrentElements() {
  const region = document.getElementById("region")
  const city = document.getElementById("city")
  const forecast = document.getElementById("forecast")
  const temp = document.getElementById("temp")

  const elementHolders = {city, temp, forecast, region}
  return elementHolders
}

async function getDaysElements() {
  const first = document.getElementById("dayOne")
  const second = document.getElementById("dayTwo")
  const third = document.getElementById("dayThird")

  const daysElements = {first, second, third}
  return daysElements
}

async function daysRenderer(data, elements, order) {
  if(order == "1" || !order) {
    console.log("rendering 1st day forecast...")
    const forecast = data.forecast.dayOne
    elements.forecast.append(forecast)
  } else if(order == "2") {
    console.log("rendering 2nd day forecast...")
    const forecast = data.forecast.dayTwo
    elements.forecast.append(forecast)
  } else {
    console.log("rendering 3rd day forecast...")
    const forecast = data.forecast.dayThree
    elements.forecast.append(forecast)
  }
}

async function currentInfoRenderer(data, elements) {
  const region = data.region
  const city = data.city
  const weather = data.weather
  const temp = data.temperature
  // const wind = data.wind

  
  elements.region.append(region)
  elements.city.append(city)
  elements.forecast.append(weather)
  elements.temp.append(temp + '℃')
}

async function switcher(data, order) {
  if(order == "1" || null || '') {
    return data.forecast[0]
  } else if(order == "2") {
    return data.forecast[1]
  } else if(order == "3") {
    return data.forecast[2]
  } else {
    console.log("wrong input please")
  }
}

// async function forecastInfoAssigner(forecastData) {
//   const sortedInfo = await forecasatInfoSorter(forecastData)
//   const assigned = await elementGenerator(sortedInfo)
//   return assigned
// }

