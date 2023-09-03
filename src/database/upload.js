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
