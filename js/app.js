const apiKey = `484756ac6e313080be69a77ee84106c1`;
const loadTemperature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
}