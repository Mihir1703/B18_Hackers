import React, { useEffect,useState} from 'react'
import Cookies from 'universal-cookie/es6';
import { useHistory } from 'react-router';
import wheat from '../img/logo.png'
import wheat2 from '../img/wheat.jpg'

const Front = () => {
    const [phone, setphone] = useState(null)
    const [name, setname] = useState("")
    const cookies = new Cookies();
    let history = useHistory();
    async function getUser() {
        let response = await fetch('http://localhost:8000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": cookies.get('auth-token')
            }
        })
        let res = await response.json()
        setphone(res.phone)
        setname(res.name)
        if (res.success === false) {
            history.push('/');
        }
    }
    useEffect(() => {
        getUser();
    })
    let logOut = () => {
        cookies.remove('auth-token');
        history.push('/')
    }
    return (
        <div>
            <div className="banner" style={{
                backgroundImage:`linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${wheat2})`
            }}>
                <div className="navbar">
                    <img src={wheat} className="logo" alt="" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><button onClick={logOut()}>Log Out</button></li>

                    </ul>
                </div>
                <div className="content">
                    <h1>Hello Harshit!</h1>
                    <p>Current tempeature in Varansi is 29&deg; C</p>
                    <div>
                        <button type="button"><span></span> More Info</button>
                        <button type="button"><span></span> Forecast</button>
                    </div>
                </div>
            </div>
            <div className="body">
                <p>Weather: Haze</p>
                <p>Maximum tempeature: 27.88&deg;C</p>
                <p>Minimum tempeature: 23.88&deg;C</p>
                <p>Wind Speed: 1.16 kmph</p>
            </div>
        </div>
    )
}

export default Front