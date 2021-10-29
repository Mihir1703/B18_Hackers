import Cookies from 'universal-cookie/es6'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react';

const cookies = new Cookies();

const Signin = (props) => {
    async function getUser() {
        let response = await fetch('http://localhost:8000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": cookies.get('auth-token')
            }
        })
        let res = await response.json()
        if (res.success === true) {
            history.push('/real');
        }
    }
    useEffect(() => {
        getUser();
    })
    let history = useHistory()
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let handleSubmit = async (e) => {
        console.log("submitted")
        e.preventDefault();
        let response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        let json = await response.json();
        if (json.success) {
            cookies.set('auth-token', json.authtoken);
            history.push('/real')
        }

    }
    let onChangeEmail = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    let onChangePassword = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="login">
                <div className="login__content">
                    <div className="login__img">
                        <img src={props.imgLink} alt="" />
                    </div>

                    <div className="login__forms">
                        <form action="" className="login__registre" id="login-in" onSubmit={handleSubmit}>
                            <h1 className="login__title">Sign In</h1>

                            <div className="login__box">
                                <i className='bx bx-envelope login__icon'></i>
                                <input type="text" placeholder="Email" name="email" value={credentials.email} onChange={onChangeEmail} className="login__input" />
                            </div>

                            <div className="login__box">
                                <i className='bx bx-lock-alt login__icon'></i>
                                <input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChangePassword} className="login__input" />
                            </div>

                            <Link to="/" className="login__forgot">Forgot password?</Link>

                            <button type="submit" className="login__button">Sign In</button>

                            <div>
                                <span className="login__account">Don't have an Account ?</span>
                                <span onClick={()=>{
                                    history.push('/signup')
                                }} className="login__signin" id="sign-up">Sign Up</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
