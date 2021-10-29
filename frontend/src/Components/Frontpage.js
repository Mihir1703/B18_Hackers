import React, { useEffect,useState} from 'react'
import Cookies from 'universal-cookie/es6';
import { useHistory } from 'react-router';

const Frontpage = () => {
    const [username, setusername] = useState(null)
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
        setusername(res.user)
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
        <div key={username}>
            <h1>Hello I {username}</h1>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}

export default Frontpage
