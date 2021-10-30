import Cookies from 'universal-cookie/es6'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import pro from '../img/pro.svg'
import bg from '../img/bg.svg'
import swal from 'sweetalert';

const cookies = new Cookies();

const SignUp = () => {
    async function getUser() {
        console.log(cookies.get('auth-token'))
        let response = await fetch('http://localhost:8000/api/auth/getuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": cookies.get('auth-token')
            }
        })
        let res = await response.json()
        if (res.success === true) {
            history.push('/');
        }
    }
    useEffect(() => {
        getUser();
    })
    let history = useHistory()
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")
    let handleSubmit = async (e) => {
        console.log("submitted")
        e.preventDefault();
        let response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone:phone,password:password })
        })
        let json = await response.json();
        console.log(json)
        if (json.success) {
            cookies.set('auth-token', json.authtoken);
            history.push('/')
        }else{
            swal("Try Again!", json.error, "error");
        }

    }

    return (
        <>
            <div class="container">
                <div class="img">
                    <img src={bg} alt="" />
                </div>
                <div class="login">
                    <form action="" onSubmit={handleSubmit}>
                        <img class="avatar" src={pro} alt="" />
                        <h2>Welcome</h2>
                        <div class="input-div one focus">
                            <div class="i">
                                <i class="fa fa-user"></i>
                            </div>
                            <div>
                                <h5>Phone Number</h5>
                                <input class="input" type="text" value={phone} onChange={
                                    e=>{
                                        setphone(e.target.value)
                                    }
                                }/>
                            </div>
                        </div>
                        <div class="input-div two focus">
                            <div class="i">
                                <i class="fa fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input class="input" type="password" value={password} onChange={
                                    e=>{
                                        setpassword(e.target.value)
                                    }
                                }/>
                            </div>
                        </div>
                        <input type="submit" class="btn" value="Login" />
                        <div class="end"> Don't have an account?  <Link to="/signup">Register here</Link> </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp