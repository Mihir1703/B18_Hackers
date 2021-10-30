import React from 'react'
import wheat from '../img/logo.png'
import wheat2 from '../img/wheat.jpg'
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie/es6'
import PriceTable from './PriceTable';
import swal from 'sweetalert';
import Favorable from './Favorable';


export const Child = ({ items, location, user }) => {
    let warned = false
    const history = useHistory()
    const cookies = new Cookies()
    let out = () => {
        console.log("click")
        cookies.remove('auth-token')
        history.push('/signin')
    }
    return (
        <>
            <div>
                <div className="banner" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${wheat2})`
                }}>
                    <div className="navbar">
                        <img src={wheat} className="logo" alt="" />
                        <ul>
                            <li><button onClick={out}>Log Out</button></li>

                        </ul>
                    </div>
                    <div className="content">
                        <h1>Hello {user}!</h1>
                        <p>Current tempeature in {location} is {items[0].temperature}&deg; C</p>
                        <div>
                            <button type="button"><span></span> More Info </button>
                            <button type="button"><span></span> Forecast </button>
                        </div>
                    </div>
                </div>
                <div className="head" id="#forecast">
                    <h1>Weather forecast</h1>
                </div>
                <div className="container-v">
                    {items.map(e => {
                        let arr = (e.date.split(' ')[0]).split('-')
                        if(e.weather !== 'Clear' && warned === false){
                            swal("Warning",`There would be ${e.desc} atmosphere on \n\t\t ${arr[2] + "-" + arr[1] + "-" + arr[0]}`,"warning");
                            warned = true
                        }
                        return (
                            <div className="box">
                                <h1>{location}</h1>
                                <i className={`fas fa-${e.weather === 'Clouds'?"cloud":e.weather==='Clear'?"sun":(e.weather === 'Rain')?"cloud-rain":"cloud-moon"}`}></i>
                                <p>{e.weather}</p>
                                <h2>{e.temperature}&deg;C <br /> <p>{arr[2] + "-" + arr[1] + "-" + arr[0]}</p></h2>
                            </div>
                        )
                    })}
                    {
                        (warned === false)?swal("Good to go!!","The sky is clear!!","success"):console.log("Nothing")
                    }
                </div>
                <PriceTable city={location}/>
                <Favorable/>
            </div>

        </>
    )
}
