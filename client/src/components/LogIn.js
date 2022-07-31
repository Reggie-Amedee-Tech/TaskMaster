import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import classes from '../cssModules/Login.module.css'

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const { setHName } = props;

    const login = (e) => {
        e.preventDefault();
        axios.post(
            'http://localhost:8000/api/taskmaster/login',
            { email, password },
            { withCredentials: true }
        )
            .then(res => {
                console.log(res.data)
                setHName(res.data)
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
            <div className={classes.LoginDiv}>
                <table>
                    <h1>Please Log In!</h1>
                    <tr>
                        <td className={classes.TableData}>
                            <label>Email:</label>
                            <div>
                                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className={classes.Input}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.TableData}>
                            <label>Password:</label>
                            <div>
                                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} className={classes.Input}/>
                            </div>
                            <p className='error message'>{errorMessage ? errorMessage : ""}</p>
                        </td>
                    </tr>
                    <input type="submit" className={classes.Button}/>
                </table>
            </div>
        </form>
    )
}

export default LogIn;