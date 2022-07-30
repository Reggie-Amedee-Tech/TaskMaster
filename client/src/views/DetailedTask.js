import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'



const DetailedTask = (props) => {
    const [task, setTask] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/task/' + props.id,{withCredentials: true})
            .then(res => setTask({
                ...res.data
            }))
    })
    return (
        <div>
        <div style={{display:'flex',justifyContent:'center'}}>
            
            <div>
                <table style={{border:'1px solid' }}>
                    <tr >
                        <th style={{border:'1px solid' }}><h3>Task Name:</h3></th>
                        <th style={{border:'1px solid' }}><h3>Task Description:</h3></th>
                        <th style={{border:'1px solid' }}><h3>Task Date:</h3></th>
                    </tr>
                    <tr>
                        <td style={{border:'1px solid' }}>{task.taskName}</td>
                        <td style={{border:'1px solid' }}>{task.taskDescription}</td>
                        <td style={{border:'1px solid' }}>{task.date}</td>
                    </tr>
                </table>
                <button style={{marginTop:'20px'}}onClick={() => navigate('/task/' + task._id + '/edit')}>Edit</button>
            </div>
        </div>
        <ul style={{display: 'flex',
        listStyleType:"none", justifyContent: "space-evenly", borderStyle: 'solid'}}>
                <li>
                    <h1 onClick={()=> navigate('/create')}>Task</h1>
                </li>
                
            </ul>
        </div>
    )
}

export default DetailedTask;