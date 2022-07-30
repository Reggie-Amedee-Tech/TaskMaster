import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

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
            <div style={{display:'flex'}}>

            
            
            <table>
            <h1>Please Sign Up!</h1>
                <tr>
                    <td>
                        <label>Name:</label>
                        <div>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                            {errors.name ?
                                <p>{errors.name.message}</p>
                                : null}
                        </div>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <label>userId: </label>
                    <div>
                        <input type="text" onChange={(e) => setUserId(e.target.value)} value={userId} />
                        {errors.userId ?
                            <p>{errors.userId.message}</p>
                            : null}
                    </div>
                </tr>
                <tr>
                    <label>Email: </label>
                    <div>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        {errors.email ?
                            <p>{errors.email.message}</p>
                            : null}
                    </div>
                </tr>
                <tr>
                    <label>Password: </label>
                    <div>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                        {errors.password ?
                            <p>{errors.password.message}</p>
                            : null}
                    </div>
                </tr>
                <tr>
                    <label>Confirm Password: </label>
                    <div>
                        <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        {errors.confirmPassword ?
                            <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
                            : null}
                    </div>
                </tr>

                

            </table>
            </div>
            <input type='submit'
                    style={{
                        width: "90px",
                        alignSelf: "center"
                    }}
                ></input>
        </form>
    )
}

export default SignUp;