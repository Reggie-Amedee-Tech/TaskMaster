import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErros] = useState({});

    const register = (e) => {
        e.preventDefault()
        const newTaskMaster = {name, userId, email, imageUrl, password, confirmPassword};
        axios.post('http://localhost:8000/api/taskmaster/register', newTaskMaster, {
            withCredentials: true
        })
        .then(res=> {
            console.log(res);
            setName('');
            setUserId('');
            setImageUrl('');
            setPassword('');
            setConfirmPassword('');
            
        })
        .catch(err=> {
            console.log(err);
            
        })
    }


    return (
        <fieldset>
            <legend>Please Sign Up To Become A TaskMaster</legend>
            <form onSubmit={register}>
                <div className='formGroup'>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <label>Name</label>
                {errors.name ? 
                <p>{errors.name.message}</p>
            : null}
                </div>
                <div className='formGroup'>
                <input type="text" onChange={(e) => setUserId(e.target.value)} value={userId}/>
                <label>userId</label>
                {errors.userId ? 
                <p>{errors.userId.message}</p>
            : null}
                </div>
                <div className='formGroup'>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label>Email</label>
                {errors.email ? 
                <p>{errors.email.message}</p>
            : null}
                </div>
                <div>
                <input type="text" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
                <label>imageUrl</label>
                {errors.imageUrl ? 
                <p>{errors.imageUrl.message}</p>
            : null}
                </div>
                <div className='formGroup'>
                <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <label>Password</label>
                {errors.password ? 
                <p>{errors.password.message}</p>
            : null}
                </div>
                <div className='formGroup'>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                <label>Confirm Password</label>
                {errors.confirmPassword ? 
                <p>{errors.confirmPassword.message}</p>
            : null}
                </div>
                <input type='submit'></input>
                
            </form>
            
        </fieldset>

    )
}

export default SignUp;