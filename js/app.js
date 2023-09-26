const apiKey = `484756ac6e313080be69a77ee84106c1`;
const loadTemperature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}
const displayTemperature=data=>{
    const temperature=document.getElementById('temperature');
    // console.log(data.main.temp);
    temperature.innerText=data.main.temp;   
}

document.getElementById('btn-temperature').addEventListener('click',function(){
    const SearchField=document.getElementById('Search-field');
    const city=SearchField.value;
    // set city

    const cityName=document.getElementById('city-name');
    cityName.innerText=city;
    loadTemperature(city);

})
loadTemperature('dhaka');