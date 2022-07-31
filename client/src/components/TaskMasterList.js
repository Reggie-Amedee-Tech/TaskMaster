import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client'
import { navigate } from '@reach/router';
import classes from '../cssModules/Homepage.module.css'
import defaultImg from '../assets/default-img.jpg'


const TaskMasterList = (props) => {
    const [taskMasters, setTaskMasters] = useState({});
    const [loaded, setLoaded] = useState('');
    const [socket] = useState(() => io(':8000'))
    const { hName } = props;

    const logout = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/taskmaster/logout', {}, { withCredentials: true })
            .then(res => {
                console.log('You have successfully logged out!')
                navigate('/register')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/welcome', {
            withCredentials: true
        })
            .then(res => {
                setTaskMasters(res.data)
                setLoaded(true)
            })
    }, [])
    useEffect(() => {
        console.log('inside of useEffect for socket');
        socket.on('task_added', (data) => {
            setTaskMasters((currentAllTasksValue) => {
                return [data, ...currentAllTasksValue]
            })
        })
        return () => socket.disconnect()
    }, [socket])

    console.log(taskMasters)
    console.log(hName.taskmasterLogged.name)

    return (
        <>
        <div className={classes.Div}>
            <div className={classes.Container}>
        <div className={classes.Header}>
                    <h1>Welcome To Task World</h1>
                    <h1>{hName.taskmasterLogged.name}</h1>
                </div>
        {loaded && taskMasters.map(taskMaster => {
            return <div className={classes.Taskcard}>
                    <div>
                        <h1>{taskMaster.userId}</h1>
                        <img src={defaultImg} alt="default_pic_icon" className={classes.Img}></img>
                    </div>
                    <h1>Task Created!</h1>
        </div>
        
        })}
        </div>
        <div className={classes.Footer}>
            <h1 onClick={()=> navigate('/create')}>Create Task</h1>
            <h1 onClick={logout}>Logout</h1>
        </div>
        </div>
        </>
        
    )
}

export default TaskMasterList;