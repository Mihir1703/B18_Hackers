import React, { useEffect,useState,useEffect} from 'react'
import Cookies from 'universal-cookie/es6';
import { useHistory } from 'react-router';
import { Child } from './Child';

const Weather = () => {
    const [items, setItems] = useState();
    const [city, setcity] = useState("")
    let isCloud = {
        "desc": false,
        "date": "",
        "type": ""
    }
    let toShow = []
    let getLocation = async () => {
        let url = "https://ipinfo.io/json?token=f1ca8eebc1bf05"
        let data = await fetch(url)
        let city = await data.json()
        setcity(city.city)
        console.log("forecst run")
        let today = (new Date()).getDate()
        toShow = []
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.city}&appid=5b8181b7ac6ee3715ca04a8a2f25b230&units=metric`
        await fetch(url).then(respose => {
            return respose.json()
        }).then(data => {
            let obj = Array.from(JSON.parse(JSON.stringify(data.list)))
            obj.forEach(e => {
                let dt = new Date(e.dt_txt)
                if (today === dt.getDate()) {
                    let push = {
                        "weather": e.weather[0].main,
                        "temperature": e.main.temp,
                        "date": e.dt_txt
                    }
                    toShow.push(push)
                }
                else if (e.weather[0].main !== "Clear") {
                    if (isCloud.desc === false) {
                        isCloud.date = dt.getDate().toString()
                        isCloud.desc = true;
                        isCloud.type = e.weather[0].main
                    }
                }
            })
            console.log(toShow)
        })
    }
    useEffect(async () => {
        await getLocation()
        console.log(toShow)
        // getUser
        setItems(toShow)
    }, [])
    return (
        <>
            {items && <Child items={items} location={city}/>}
        </>
    )
}

export default Weather
