
const weather_widget = document.getElementById("weather-widget")
const current_temp = document.getElementById("current-temp")
const current_date = document.getElementById("date")
const current_time = document.getElementById("clock")
const current_weather = document.getElementById("current-weather")
const current_humidity = document.getElementById("humidity-info")
const current_downfall = document.getElementById("water-info")
const current_wind_speed = document.getElementById("wind-info")
const side = document.getElementById("side")
const current_weather_icon = document.getElementById("current-weather-icon")
let weather_data = "";


  let scrollbar = document.getElementById('scrollbar')
  let scrollbox = document.getElementById('scrollbox')
  let width = scrollbar.clientWidth
  let bodyRect = document.body.getBoundingClientRect(),
    elemRect = scrollbar.getBoundingClientRect(),
    offset_left = elemRect.left - bodyRect.left;
console.log(scrollbox.style.left)
console.log("width in px : " + width)
console.log("Offset in px : " + offset_left);

function move(event) {
    var mouse = event.clientX;
    mouse_x = mouse - bodyRect.left;
    mouse_x = mouse_x - offset_left
   if (mouse_x >= 0) {
       
       console.log(mouse_x)
       scrollbox.style.left = mouse_x - 5 + "px"
   }
   let x = event.pageX - offset_left
   if(x < 27) {
     
     getGeoLocation();
     scrollbox.style.left = "-5px"
     return
   }
   if(x >= 27 && x < 54) {
     console.log(weather_data.hourly[3])
     current_temp.innerHTML = weather_data.hourly[3].temp + "&#176"
     let x = weather_data.hourly[3].weather[0].main;
     current_weather.innerHTML = "In 3 hours the weather will be " + x;
     switch (x) {
       case "Clear":
         current_weather_icon.innerHTML = `<use href="#sun" />`
         break;
       case "Clouds":
         current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
         break;
       case "Rain":
         current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
         break;
       case "Snow":
         current_weather_icon.innerHTML = `<use href="#snow" />`
         break;
       default:
         console.log("Switch Error")
     }
     scrollbox.style.left = "52px"
     return
   }
   if(x >= 54 && x < 84) {
     current_temp.innerHTML = weather_data.hourly[3].temp + "&#176"
     let x = weather_data.hourly[3].weather[0].main;
     current_weather.innerHTML = "In 3 hours the weather will be " + x;
     switch (x) {
       case "Clear":
         current_weather_icon.innerHTML = `<use href="#sun" />`
         break;
       case "Clouds":
         current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
         break;
       case "Rain":
         current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
         break;
       case "Snow":
         current_weather_icon.innerHTML = `<use href="#snow" />`
         break;
       default:
         console.log("Switch Error")
     }
     scrollbox.style.left = "52px"
     return
   }
   if(x >= 84 && x < 111) {
     current_temp.innerHTML = weather_data.hourly[6].temp + "&#176"
     let x = weather_data.hourly[6].weather[0].main;
     current_weather.innerHTML = "In 6 hours the weather will be " + x;
     switch (x) {
       case "Clear":
         current_weather_icon.innerHTML = `<use href="#sun" />`
         break;
       case "Clouds":
         current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
         break;
       case "Rain":
         
         current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
         break;
       case "Snow":
         current_weather_icon.innerHTML = `<use href="#snow" />`
         break;
       default:
         console.log("Switch Error")
     }
     scrollbox.style.left = "108px"
     return
   }
   if(x >= 111 && x < 141) {
     current_temp.innerHTML = weather_data.hourly[6].temp + "&#176"
     let x = weather_data.hourly[6].weather[0].main;
     current_weather.innerHTML = "In 6 hours the weather will be " + x;
     switch (x) {
       case "Clear":
         current_weather_icon.innerHTML = `<use href="#sun" />`
         break;
       case "Clouds":
         current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
         break;
       case "Rain":
         current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
         break;
       case "Snow":
         current_weather_icon.innerHTML = `<use href="#snow" />`
         break;
       default:
         console.log("Switch Error")
     }
     scrollbox.style.left = "108px"
     return
   }
   if(x >= 140 && x < 169) {
     current_temp.innerHTML = weather_data.hourly[9].temp + "&#176"
     let x = weather_data.hourly[9].weather[0].main;
     current_weather.innerHTML = "In 9 hours the weather will be " + x;
     switch (x) {
       case "Clear":
         current_weather_icon.innerHTML = `<use href="#sun" />`
         break;
       case "Clouds":
         current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
         break;
       case "Rain":
         current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
         break;
       case "Snow":
         current_weather_icon.innerHTML = `<use href="#snow" />`
         break;
       default:
         console.log("Switch Error")
     }
     scrollbox.style.left = "164px"
     return
   }
   if(x >= 169 && x < 196) {
    current_temp.innerHTML = weather_data.hourly[9].temp + "&#176"
    let x = weather_data.hourly[9].weather[0].main;
    current_weather.innerHTML = "In 9 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    scrollbox.style.left = "164px"
    return
  }
  if(x >= 196 && x < 225) {
    current_temp.innerHTML = weather_data.hourly[12].temp + "&#176"
    let x = weather_data.hourly[12].weather[0].main;
    current_weather.innerHTML = "In 12 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    scrollbox.style.left = "220px"
    return
  }
  if(x >= 225 && x < 253) {
    current_temp.innerHTML = weather_data.hourly[12].temp + "&#176"
    let x = weather_data.hourly[12].weather[0].main;
    current_weather.innerHTML = "In 12 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    scrollbox.style.left = "220px"
    return
  }
  if(x >= 253 && x < 282) {
    current_temp.innerHTML = weather_data.hourly[15].temp + "&#176"
    let x = weather_data.hourly[15].weather[0].main;
    current_weather.innerHTML = "In 15 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    scrollbox.style.left = "277px"
    return
  }
  if(x >= 282 && x < 310) {
    current_temp.innerHTML = weather_data.hourly[15].temp + "&#176"
    let x = weather_data.hourly[15].weather[0].main;
    current_weather.innerHTML = "In 15 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    scrollbox.style.left = "277px"
    return
  }
  if(x >= 310 && x < 337) {
    current_temp.innerHTML = weather_data.hourly[18].temp + "&#176"
    let x = weather_data.hourly[18].weather[0].main;
    current_weather.innerHTML = "In 18 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    
    scrollbox.style.left = "332px"
    return
  }
  if(x >= 337 && x < 366) {
    current_temp.innerHTML = weather_data.hourly[18].temp + "&#176"
    let x = weather_data.hourly[18].weather[0].main;
    current_weather.innerHTML = "In 18 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    
    scrollbox.style.left = "332px"
    return
  }
  if(x >= 366 && x < 394) {
    current_temp.innerHTML = weather_data.hourly[21].temp + "&#176"
    let x = weather_data.hourly[21].weather[0].main;
    current_weather.innerHTML = "In 21 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    
    scrollbox.style.left = "389px"
    return
  }
  if(x >= 394 && x < 422) {
    current_temp.innerHTML = weather_data.hourly[21].temp + "&#176"
    let x = weather_data.hourly[21].weather[0].main;
    current_weather.innerHTML = "In 21 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    
    scrollbox.style.left = "389px"
    return
  }
  if(x >= 422 && x < 447) {
    current_temp.innerHTML = weather_data.hourly[24].temp + "&#176"
    let x = weather_data.hourly[24].weather[0].main;
    current_weather.innerHTML = "In 24 hours the weather will be " + x;
    switch (x) {
      case "Clear":
        current_weather_icon.innerHTML = `<use href="#sun" />`
        break;
      case "Clouds":
        current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
        break;
      case "Rain":
        current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
        break;
      case "Snow":
        current_weather_icon.innerHTML = `<use href="#snow" />`
        break;
      default:
        console.log("Switch Error")
    }
    
    scrollbox.style.left = "442px"
    return
  }
}



scrollbox.onmousedown = function(event) {
    var mouse = event.clientX;
    mouse_x = mouse - bodyRect.left;
    mouse_x = mouse_x - offset_left
    scrollbox.ondragstart = function() {
    return false;
  };
    function moveAt(pageX) {
        scrollbox.style.left = pageX - offset_left - 5 + "px"
    }
  
   
    moveAt(event.pageX);
    if (mouse_x >= 0) {
       function onMouseMove(event) {
      moveAt(event.pageX);
      console.log(event.pageX - offset_left)
      if (event.pageX <= offset_left || event.pageX - offset_left >= width)
      {
        document.removeEventListener('mousemove', onMouseMove);
        scrollbox.onmouseup = null;
      }
      
    }
  
       
    }
    
    document.addEventListener('mousemove', onMouseMove);
  
      window.onmouseup = function mouseup(event, data)
    {
      document.removeEventListener('mousemove', onMouseMove);
      let x = event.pageX - offset_left
      if(x < 27) {
        
        getGeoLocation();
        scrollbox.style.left = "-5px"
        return
      }
      if(x >= 27 && x < 54) {
        console.log(weather_data.hourly[3])
        current_temp.innerHTML = weather_data.hourly[3].temp + "&#176"
        let x = weather_data.hourly[3].weather[0].main;
        current_weather.innerHTML = "In 3 hours the weather will be " + x;
        switch (x) {
          case "Clear":
            current_weather_icon.innerHTML = `<use href="#sun" />`
            break;
          case "Clouds":
            current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
            break;
          case "Rain":
            current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
            break;
          case "Snow":
            current_weather_icon.innerHTML = `<use href="#snow" />`
            break;
          default:
            console.log("Switch Error")
        }
        scrollbox.style.left = "52px"
        return
      }
      if(x >= 54 && x < 84) {
        current_temp.innerHTML = weather_data.hourly[3].temp + "&#176"
        let x = weather_data.hourly[3].weather[0].main;
        current_weather.innerHTML = "In 3 hours the weather will be " + x;
        switch (x) {
          case "Clear":
            current_weather_icon.innerHTML = `<use href="#sun" />`
            break;
          case "Clouds":
            current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
            break;
          case "Rain":
            current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
            break;
          case "Snow":
            current_weather_icon.innerHTML = `<use href="#snow" />`
            break;
          default:
            console.log("Switch Error")
        }
        scrollbox.style.left = "52px"
        return
      }
      if(x >= 84 && x < 111) {
        current_temp.innerHTML = weather_data.hourly[6].temp + "&#176"
        let x = weather_data.hourly[6].weather[0].main;
        current_weather.innerHTML = "In 6 hours the weather will be " + x;
        switch (x) {
          case "Clear":
            current_weather_icon.innerHTML = `<use href="#sun" />`
            break;
          case "Clouds":
            current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
            break;
          case "Rain":
            
            current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
            break;
          case "Snow":
            current_weather_icon.innerHTML = `<use href="#snow" />`
            break;
          default:
            console.log("Switch Error")
        }
        scrollbox.style.left = "108px"
        return
      }
      if(x >= 111 && x < 141) {
        current_temp.innerHTML = weather_data.hourly[6].temp + "&#176"
        let x = weather_data.hourly[6].weather[0].main;
        current_weather.innerHTML = "In 6 hours the weather will be " + x;
        switch (x) {
          case "Clear":
            current_weather_icon.innerHTML = `<use href="#sun" />`
            break;
          case "Clouds":
            current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
            break;
          case "Rain":
            current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
            break;
          case "Snow":
            current_weather_icon.innerHTML = `<use href="#snow" />`
            break;
          default:
            console.log("Switch Error")
        }
        scrollbox.style.left = "108px"
        return
      }
      if(x >= 140 && x < 169) {
        current_temp.innerHTML = weather_data.hourly[9].temp + "&#176"
        let x = weather_data.hourly[9].weather[0].main;
        current_weather.innerHTML = "In 9 hours the weather will be " + x;
        switch (x) {
          case "Clear":
            current_weather_icon.innerHTML = `<use href="#sun" />`
            break;
          case "Clouds":
            current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
            break;
          case "Rain":
            current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
            break;
          case "Snow":
            current_weather_icon.innerHTML = `<use href="#snow" />`
            break;
          default:
            console.log("Switch Error")
        }
        scrollbox.style.left = "164px"
        return
      }
      if(x >= 169 && x < 196) {
       current_temp.innerHTML = weather_data.hourly[9].temp + "&#176"
       let x = weather_data.hourly[9].weather[0].main;
       current_weather.innerHTML = "In 9 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       scrollbox.style.left = "164px"
       return
     }
     if(x >= 196 && x < 225) {
       current_temp.innerHTML = weather_data.hourly[12].temp + "&#176"
       let x = weather_data.hourly[12].weather[0].main;
       current_weather.innerHTML = "In 12 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       scrollbox.style.left = "220px"
       return
     }
     if(x >= 225 && x < 253) {
       current_temp.innerHTML = weather_data.hourly[12].temp + "&#176"
       let x = weather_data.hourly[12].weather[0].main;
       current_weather.innerHTML = "In 12 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       scrollbox.style.left = "220px"
       return
     }
     if(x >= 253 && x < 282) {
       current_temp.innerHTML = weather_data.hourly[15].temp + "&#176"
       let x = weather_data.hourly[15].weather[0].main;
       current_weather.innerHTML = "In 15 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       scrollbox.style.left = "277px"
       return
     }
     if(x >= 282 && x < 310) {
       current_temp.innerHTML = weather_data.hourly[15].temp + "&#176"
       let x = weather_data.hourly[15].weather[0].main;
       current_weather.innerHTML = "In 15 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       scrollbox.style.left = "277px"
       return
     }
     if(x >= 310 && x < 337) {
       current_temp.innerHTML = weather_data.hourly[18].temp + "&#176"
       let x = weather_data.hourly[18].weather[0].main;
       current_weather.innerHTML = "In 18 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       
       scrollbox.style.left = "332px"
       return
     }
     if(x >= 337 && x < 366) {
       current_temp.innerHTML = weather_data.hourly[18].temp + "&#176"
       let x = weather_data.hourly[18].weather[0].main;
       current_weather.innerHTML = "In 18 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       
       scrollbox.style.left = "332px"
       return
     }
     if(x >= 366 && x < 394) {
       current_temp.innerHTML = weather_data.hourly[21].temp + "&#176"
       let x = weather_data.hourly[21].weather[0].main;
       current_weather.innerHTML = "In 21 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       
       scrollbox.style.left = "389px"
       return
     }
     if(x >= 394 && x < 422) {
       current_temp.innerHTML = weather_data.hourly[21].temp + "&#176"
       let x = weather_data.hourly[21].weather[0].main;
       current_weather.innerHTML = "In 21 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       
       scrollbox.style.left = "389px"
       return
     }
     if(x >= 422 && x < 447) {
       current_temp.innerHTML = weather_data.hourly[24].temp + "&#176"
       let x = weather_data.hourly[24].weather[0].main;
       current_weather.innerHTML = "In 24 hours the weather will be " + x;
       switch (x) {
         case "Clear":
           current_weather_icon.innerHTML = `<use href="#sun" />`
           break;
         case "Clouds":
           current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
           break;
         case "Rain":
           current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
           break;
         case "Snow":
           current_weather_icon.innerHTML = `<use href="#snow" />`
           break;
         default:
           console.log("Switch Error")
       }
       
       scrollbox.style.left = "442px"
       return
     }
      console.log("on mouse up : " + x)
      scrollbox.onmouseup = null;
    };
  
  };






// TIME
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();

  const hoursIn12HourFormat = hour >= 13 ? hour % 12 : hour;
  const ampm = hour >= 12 ? "PM" : "AM";
  const zeroFormat = minutes >= 10 ? minutes : `0${minutes}`;
  const hourFormat = hour >= 10 ? hour : `0${hour}`;

  current_time.innerHTML = `${hoursIn12HourFormat}:${zeroFormat} <span id="am-pm">${ampm}</span>`;
  `${days[day]}, ${date} ${month}`;
  current_date.innerHTML = `${days[day]}, ${date} ${months[month]}`;
  let x = 3;
  for (i = 1; i < 9; i++) {
    if(x + hourFormat <= 24) {
    document.getElementById(`p${i}`).innerHTML = hourFormat + x +":"+ zeroFormat
    x = x + 3
    }else if(hourFormat + x - 24 < 10) {
      let hour_0 = hourFormat + x - 24
      let sum = "0" + hour_0
      document.getElementById(`p${i}`).innerHTML = sum +":"+ zeroFormat
      x = x + 3
    }else {
      document.getElementById(`p${i}`).innerHTML = hourFormat + x - 24 +":"+ zeroFormat
      x = x + 3
    }

  }
}, 1000);


// GEO
getGeoLocation();
function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(success => {
    let { latitude, longitude } = success.coords;

    getWeatherData(latitude, longitude);
  });
}

// FETCH
let errorCountAmountOfTryies = 0;

async function getWeatherData(latitude, longitude) {
  // &units=metric
  const unit = "metric";
  const API_KEY = "b99e3c8bf013d74d67560adff88b7b19";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&units=${unit}&appid=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    weather_data = data;
    console.log(data);
    showWeatherData(data);
  } catch (error) {
    // RETRY FETCH
    if (errorCountAmountOfTryies < 3) {
      getWeatherData();
      errorCountAmountOfTryies++;
    }
    console.log("whoops, something went wrong!", error);
  }
}


function showWeatherData(data) {
  let { humidity, wind_speed } = data.current;
  current_humidity.innerHTML = humidity + "%"
  current_wind_speed.innerHTML = wind_speed + "m/s"
  let createSide = ""
  data.daily.forEach((day, idx) => {
        if (idx == 0) {
           current_temp.innerHTML = day.temp.day + "&#176 / " + day.temp.night + "&#176"
           current_weather.innerHTML = day.weather[0].main
           if (day.rain == undefined) {
            current_downfall.innerHTML = "0 mm"
           }else {
            current_downfall.innerHTML = day.rain + "mm"
           }
           
           let x = day.weather[0].main;
           console.log(day.weather[0].main)
           switch (x) {
             case "Clear":
               current_weather_icon.innerHTML = `<use href="#sun" />`
               break;
             case "Clouds":
               current_weather_icon.innerHTML = `<use href="#sun_cloud" />`
               break;
             case "Rain":
               current_weather_icon.innerHTML = `<use href="#cloud_rain" />`
               
               break;
             case "Snow":
               current_weather_icon.innerHTML = `<use href="#snow" />`
               break;
             default:
               console.log("Switch Error")
           }
        } else  {
         let x = day.weather[0].main;
         switch (x) {
           case "Clear":
            createSide += `<div id="sideBox${idx}">
            <svg class="weather-icon" id="current-weather-icon_Box${idx}" viewBox="0 0 241.59 245.36">
            <use href="#sun" />
           </svg><p>${window.moment(day.dt * 1000).format("ddd")} </br> ${day.temp.day}&#176 / ${day.temp.night}&#176</p>
           
            </div>`
             break;
           case "Clouds":
            createSide += `<div id="sideBox${idx}">
            <svg class="weather-icon" id="current-weather-icon_Box${idx}" viewBox="0 0 241.59 245.36">
            <use href="#sun_cloud" />
           </svg>
           <p>${window.moment(day.dt * 1000).format("ddd")} </br> ${day.temp.day}&#176 / ${day.temp.night}&#176</p>
            </div>`
            
             break;
           case "Rain":
            createSide += `<div id="sideBox${idx}">
            <svg class="weather-icon" id="current-weather-icon_Box${idx}" viewBox="0 0 241.59 245.36">
            <use href="#cloud_rain" />
           </svg>
           <p>${window.moment(day.dt * 1000).format("ddd")} </br> ${day.temp.day}&#176 / ${day.temp.night}&#176</p>
            </div>`
             
             break;
           case "Snow":
            createSide += `<div id="sideBox${idx}">
            <svg class="weather-icon" id="current-weather-icon_Box${idx}" viewBox="0 0 241.59 245.36">
            <use href="#snow" />
           </svg>
           <p>${window.moment(day.dt * 1000).format("ddd")} </br> ${day.temp.day}&#176 / ${day.temp.night}&#176</p>
            </div>`
             break;
           default:
             console.log("Switch Error")
         }
        }
      });
      side.innerHTML = createSide
}

