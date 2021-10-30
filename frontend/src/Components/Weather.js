import {React,useState,useEffect} from 'react'

const Weather = () => {
    const [city, setcity] = useState("")
    let [forecastData, setforecastData] = useState([])
    let [toShow, settoShow] = useState([])
    let getLocation = async ()=>{
        let url = "https://ipinfo.io/json?token=f1ca8eebc1bf05"
        fetch(url).then(respose=>{
            return respose.json()
        }).then(data=>{
            setcity(data.city)
        })
    }
    useEffect(() => {
        getLocation()
    })
    let forecast = async ()=>{
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5b8181b7ac6ee3715ca04a8a2f25b230&units=metric`
        await fetch(url).then(respose=>{
            return respose.json()
        }).then(data=>{
            forecastData = data.list
            console.log(forecastData)
            todayForecast()
        })
    }
    let todayForecast = ()=>{
        let today = (new Date()).getDate()
        forecastData.forEach(element => {
            console.log(element)
            let dt = new Date(element.dt_txt)
            if(today === dt){
                toShow.push({
                    "weather":element.weather[0].main
                })
            }
        });
        console.log(toShow)
    }
    return (
        <div>
            <button onClick={forecast()} >Hello</button>
        </div>
    )
}

export default Weather
