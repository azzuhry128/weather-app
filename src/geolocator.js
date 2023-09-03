// a module to access users location using browser

const geocode_key = "fa62a164b6f543dc8e9c0dfca71eee4a"

export async function getLocation() {
  if (navigator.geolocation) {
    console.log("gettings user's geocode...")
    const geocode = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("getting user's location...")
        resolve(geocodeConverter(position.coords.latitude, position.coords.longitude));
      }, (error) => {
        reject(error);
      });
    });
    return geocode;
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

async function geocodeConverter(latitude, longitude) {
  return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2c+${longitude}&key=${geocode_key}&pretty=1`)
            .then(response => response.json())
            .then(data => {
              const location = data.results[0].components.county
              console.log(`current location: ${location}`)
              return data.results[0].components.county
            })
            .catch(error => console.error(error))
}

// async function geolocationObject(georesult) {
//   const city = georesult.results[0].components.city
//   return city
// }


// function showError(error) {
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       console.log("User denied the request for Geolocation.");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       console.log("Location information is unavailable.");
//       break;
//     case error.TIMEOUT:
//       console.log("The request to get user location timed out.");
//       break;
//     case error.UNKNOWN_ERROR:
//       console.log("An unknown error occurred.");
//       break;
//   }
// }


      //   async function getGeocode(position) {
          

      //     const geocode = {latitude, longitude}

      //     const city = await geocodeConverter(geocode)
      //     return city
      // }