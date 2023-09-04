import { main } from "./src/main.js";

//all necessary function must be called right here
window.onload = () => {
    if(localStorage.getItem("geolocation") != '' && localStorage.getItem("weather")) {
    console.log("data exist...")
    main()
  } else {
    console.log("data not exist...")
  }
}

//just kidding its should be here 

// call fetcher -> assigner -> renderer upon windows.onLoad event
// rendered must wait for assigner, and assigner must wait for fetcher
// after all is checked then data will be rendered

// every function is asynchronous
// you may display loading screen while waiting for data to be retrieved

// createWeatherObject()



