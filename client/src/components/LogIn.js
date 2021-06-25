import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const {setHName} = props;

    const login = (e) => {
        e.preventDefault();
        axios.post(
            'http://localhost:8000/api/taskmaster/login',
            

            { email, password },
            { withCredentials: true }
        )
            .then(res => {
                console.log(res.data.taskmasterLogged.name)
                setHName(res.data.taskmasterLogged.name)
                navigate('/create')
                
            }

            )
            .catch(err => {
                console.log(err)
                setErrorMessage(err.response.data.msg)
            })
    }



    return (
        
            
            <form onSubmit={login}>
                <table>

                
                <h1>Please Log In!</h1>
                <tr>

                <label>Email:</label>
                <div>
                    
                
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </div>
                </tr>
                <tr>

                <label>Password:</label>
                <div>
                
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                </div>
                <p className='error message'>{errorMessage ? errorMessage : ""}</p>
                </tr>

                <input type="submit" style={{width:"90px",
            alignSelf: "center"}} />
            </table>
                
                
            </form>
        

    )
}

export default LogIn;