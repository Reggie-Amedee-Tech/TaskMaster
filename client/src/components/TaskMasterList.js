import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client'
import './styles.css'
import { navigate } from '@reach/router';

const TaskMasterList = (props) => {
    const [taskMasters, setTaskMasters] = useState({});
    const [loaded, setLoaded] = useState('');
    const [socket] = useState(() => io(':8000'))
    const {hName} = props;

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
    return (

        <div>
            <ul style={{
                display: 'flex',
                listStyleType: "none", justifyContent: "space-evenly", borderStyle: 'solid'
            }}>
                <li>
                    <h1>Welcome Task Master</h1>
                </li>
                <li>
                    <h1>{hName}</h1>
                </li>

            </ul>

        
        <div>
            
            {loaded && taskMasters.map((taskmaster, i) => {
                return <div  classname="homepageTable" style={{ border: '1px solid', marginTop:'20px' }}>
                    <table key={i} style={{width:'100%'}}>
                        <tr>
                            <th style={{border: '1px solid'}}>TaskMaster</th>
                            <th style={{border: '1px solid'}}>Profile Picture</th>
                        </tr>
                        <tr>
                            <td style={{border: '1px solid'}}>
                                {taskmaster.userId} created a new Task!
                            </td>
                            <td style={{border: '1px solid'}}><img className="profilePicture" src={taskmaster.imageUrl} alt="img"></img></td>
                        </tr>
                    </table>
                </div>
                
            })}
            <div>
            <ul style={{display: 'flex',
        listStyleType:"none", justifyContent: "space-evenly", borderStyle: 'solid'}}>
                <li>
                    <h1 onClick={()=> navigate('/create')}>Task</h1>
                </li>
                <li>
                <h1 onClick={logout}>Logout</h1>
                </li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default TaskMasterList;