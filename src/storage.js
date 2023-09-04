//upload geolocation data
export function uploadGeolocation() {
  localStorage.setItem("geolocation", "bogor")
  console.log("geolocation data inserted...")
}
//upload forecast and weather data
export function uploadWeather() {
  localStorage.setItem("weather", "cerah")
  console.log("weather data inserted")
}

export function download() {
  console.log("fetching items...")
  const location = localStorage.getItem("geolocation")
  const weather = localStorage.getItem("weather")
  console.log("items fetched...")
  return data = {location, weather}
}
