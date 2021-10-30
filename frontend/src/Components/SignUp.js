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
    const [credentials, setCredentials] = useState({ uid,password: "",name:"",phone })
    let handleSubmit = async (e) => {
        console.log("submitted")
        e.preventDefault();
        let response = await fetch('http://localhost:8000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password,name:credentials.name,username:credentials.username })
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
    let onChangeName = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    let onChangeUsername = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            
        </div>
    )
}

export default Signin
