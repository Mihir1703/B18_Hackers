import React from 'react'
import wheat from '../img/logo.png'
import wheat2 from '../img/wheat.jpg'
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie/es6'


export const Child = ({ items, location, user }) => {
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Profile</a></li>
                            <li><button onClick={out}>Log Out</button></li>

                        </ul>
                    </div>
                    <div className="content">
                        <h1>Hello {user}!</h1>
                        <p>Current tempeature in {location} is {items[0].temperature}&deg; C</p>
                        <div>
                            <button type="button"><span></span> More Info</button>
                            <button type="button"><span></span> Forecast</button>
                        </div>
                    </div>
                </div>
                <div className="container-v">
                    {console.log(items.length)}
                </div>
            </div>

        </>
    )
}
