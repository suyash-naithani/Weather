window.addEventListener('Load',()=>{

    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimeZone = document.querySelector(".location-timezone");
    let temperaturesection =document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature span");

       if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = $[proxy]`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={9078067abb237578a2d70283fdfca4d1}`;
            fetch(api)
            .then(response=>{

                return response.json();
            })
            .then(data => {
                console.log(data);
                const{temp,feels_like} = data.main;
                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = feels_like;
                locationTimeZone.textContent = data.timezone;
                let celcius = (temp-32)*(5/9);
                temperaturesection.querySelector.addEventListener('click',()=>{
                    if(temperatureSpan.textContent === "F"){

                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celcius);


                    }
                    else {temperatureSpan.textContent = "F";
                    temperatureDegree.textContent = temp;}

                    
                })
            })
        })

    }else{
        h1.textContent = "Please update location";
    }
})