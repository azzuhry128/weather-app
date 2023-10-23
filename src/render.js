

export async function render(data, event) {
  console.log("rendering data...")

  currentInfoRenderer(data, await getCurrentElements())
  daysRenderer(data, await getDaysElements())
  forecastRenderer(data, event)

  console.log("render finished...")
}

export async function forecastRenderer(data, event) {
  const switched = await(switcher(data, event))
  const forecastWrapper = document.getElementById("forecast-container")

  switched.forEach((object) => {
  const wrapper = document.createElement("div")
  const clock = document.createElement("h1")
  // const weatherIcon = document.createElement("img")
  const temp = document.createElement("h1")

  wrapper.setAttribute('id', 'forecast-data')
  wrapper.classList.add("p-2", "gap-x-2" ,"text-center")

    clock.textContent = object.hour
    temp.textContent = object.temp
    
    wrapper.appendChild(clock)
    wrapper.appendChild(temp)

    forecastWrapper.appendChild(wrapper)
    // console.log(wrapper)
  })

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
  const third = document.getElementById("dayThree")

  const daysElements = {first, second, third}
  return daysElements
}

async function daysRenderer(data, elements) {
  console.log(data.days)

  const firstDay = data.days[0]
  const secondDay = data.days[1]
  const thirdDay = data.days[2]

  elements.first.append(firstDay)
  elements.second.append(secondDay)
  elements.third.append(thirdDay)
}

async function currentInfoRenderer(data, elements) {
  const region = data.region
  const city = data.city
  const weather = data.weather
  const temp = data.temperature
  
  elements.region.append(region)
  elements.city.append(city)
  elements.forecast.append(weather)
  elements.temp.append(temp + '℃')
}

async function switcher(data, event) {
  if(event == "render-first") {
    console.log("returning forecast[0]")
    return data.forecast[0]
  } else if(event == "render-second") {
    console.log("returning forecast[1]")
    return data.forecast[1]
  } else if(event == "render-third") {
    console.log("returning forecast[2]")
    return data.forecast[2]
  } else {
    console.log("wrong input")
  }
}

// async function forecastInfoAssigner(forecastData) {
//   const sortedInfo = await forecasatInfoSorter(forecastData)
//   const assigned = await elementGenerator(sortedInfo)
//   return assigned
// }

