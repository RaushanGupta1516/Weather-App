let searchel = document.querySelector("#search");
let inpel = document.querySelector("#inpbox");
let tempel = document.querySelector("#tempp");
let cnameel = document.querySelector("#cname");
let hdityel = document.querySelector("#hdity");
let wspeedel = document.querySelector("#wspeed");
let photoel = document.querySelector("#photo");
let weathertypeel = document.querySelector("#weathertype");
showWeather("New York");

searchel.addEventListener("click", () => {
    showWeather(inpel.value);
    
});

async function showWeather(city) {
    let url = "https://api.weatherapi.com/v1/current.json?key=31001e90193c4402843172442242709&q=";

    let response = await fetch(url+city);
    let data = await response.json();
    console.log(data);
    photoel.src = data.current.condition.icon;
    weathertypeel.textContent = data.current.condition.text;
    tempel.textContent = Math.round(data.current.temp_c) + "°c";
    cnameel.textContent=data.location.name;
    hdityel.textContent = data.current.humidity + "%";
    wspeedel.textContent = Math.round(data.current.wind_kph) + "km/h";
    
 }
