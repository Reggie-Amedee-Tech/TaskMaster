import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import classes from '../cssModules/SignUp.module.css'

const SignUp = () => {
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const register = (e) => {
        e.preventDefault()
        const newTaskMaster = { name, userId, email, password, confirmPassword };
        axios.post('http://localhost:8000/api/taskmaster/register', newTaskMaster, { withCredentials: true })
            .then(res => {
                console.log(res);
                setName('');
                setUserId('');

                setPassword('');
                setConfirmPassword('');
                navigate('/create')

            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }


    return (
        <form onSubmit={register}>
            <div className={classes.Table}>
                <table>
                    <h1 >Please Sign Up!</h1>
                    <tr>
                        <td className={classes.TableData}>
                            <label className={classes.FormLabel}>Name:</label>
                            <div>
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name}  className={classes.Input}/>
                                {errors.name ?
                                    <p>{errors.name.message}</p>
                                    : null}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.TableData}>
                        <label className={classes.FormLabel}>UserId: </label>
                        <div>
                            <input type="text" onChange={(e) => setUserId(e.target.value)} value={userId}  className={classes.Input}/>
                            {errors.userId ?
                                <p>{errors.userId.message}</p>
                                : null}
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.TableData}>                        
                        <label className={classes.FormLabel}>Email: </label>
                        <div>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}  className={classes.Input}/>
                            {errors.email ?
                                <p>{errors.email.message}</p>
                                : null}
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.TableData}>
                        <label className={classes.FormLabel}>Password: </label>
                        <div>
                            <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}  className={classes.Input}/>
                            {errors.password ?
                                <p>{errors.password.message}</p>
                                : null}
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.TableData}>
                        <label className={classes.FormLabel}>Confirm Password: </label>
                        <div>
                            <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}  className={classes.Input}/>
                            {errors.confirmPassword ?
                                <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
                                : null}
                        </div>
                        </td>
                    </tr>
                    <tr className={classes.TableData}>
                        <td>
                        <input type='submit' className={classes.Button}></input>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    )
}

export default SignUp;