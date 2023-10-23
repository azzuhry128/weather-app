import { main } from "./src/main.js";

//all necessary function must be called right here
window.onload = () => {
    if(localStorage.getItem("geolocation") != '' && localStorage.getItem("weather")) {
    console.log("data exist...")
    main()
    daysButtonTrigger()
  } else {
    console.log("data not exist...")
  }
}


function daysButtonTrigger() {
  const renderFirst = new Event("render-first")
  const renderSecond = new Event("render-second")
  const renderThird = new Event("render-third")

  const first = document.getElementById("dayOne")
  const second = document.getElementById("dayTwo")
  const third = document.getElementById("dayThree")

  first.addEventListener("click", () => {
    console.log("first day button pressed...")
    first.dispatchEvent(renderFirst)
  })

  second.addEventListener("click", () => {
    console.log("second day button pressed...")
    second.dispatchEvent(renderSecond)

  })

  third.addEventListener("click", () => {
    console.log("third day button pressed...")
    third.dispatchEvent(renderThird)
  })

}

//just kidding its should be here 

// call fetcher -> assigner -> renderer upon windows.onLoad event
// rendered must wait for assigner, and assigner must wait for fetcher
// after all is checked then data will be rendered

// every function is asynchronous
// you may display loading screen while waiting for data to be retrieved

// createWeatherObject()



