import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router'



const DetailedTask = (props) => {
    const [task, setTask] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/task/' + props.id)
        .then(res => setTask({
            ...res.data
        }))
    })


    return(
        <div>
            <p>Task Name: {task.taskName}</p>
            <p>Task Description: {task.taskDescription}</p>
            <p>Take Date: {task.date}</p>
            <button onClick={() => navigate('/task/' + task._id + '/edit')}>Edit</button>
        </div>

    )
}

export default DetailedTask;