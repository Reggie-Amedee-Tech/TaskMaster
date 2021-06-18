import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/taskmaster/login',

            { email, password },
            { withCredentials: true }
        )
            .then(res => {
                console.log(res)
                navigate('/create')
            }

            )
            .catch(err => {
                console.log(err)
                setErrorMessage(err.response.data.msg)
            })
    }



    return (
        <fieldset>
            <legend>Log In</legend>
            <form onSubmit={login}>
                <div>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Email:</label>
                </div>
                <div>
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Password:</label>
                </div>


                <input type="submit" />
                <p className='error message'>{errorMessage ? errorMessage : ""}</p>
            </form>
        </fieldset>

    )
}

export default LogIn;