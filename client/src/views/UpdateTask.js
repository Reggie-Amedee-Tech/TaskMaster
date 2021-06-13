import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UpdateTask = (props) => {
    const [taskName, setTaskName] = useState();
    const [taskDescription, setTaskDescription] = useState();
    const [date, setDate] = useState();
    const { id } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/task/' + id)
            .then(res => {
                setTaskName(res.data.taskName)
                setTaskDescription(res.data.taskDescription)
                setDate(res.data.date)
            })
    }, [])

    const updateTask = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/task/' + id, {
            taskName,
            taskDescription,
            date
        })
            .then(res => {
                console.log(res)
                navigate('/task/' + id)
            })
    }

    return (
        <form onSubmit={updateTask}>
            <div>
                <p>
                    <label>Task Name: <br /></label>
                    <input type="text" name ="taskName" onChange={(e) => {setTaskName(e.target.value)}} value={taskName} />
                </p>
            </div>
            <div>
                <p>
                    <label>Task Description: <br /></label>
                    <input type="text" name="taskDescription" onChange={(e) => {setTaskDescription(e.target.value)}} value={taskDescription} />
                </p>
            </div>
            <div>
                <p>
                    <label>Task Date: <br /></label>
                    <input type="date"  name="date" onChange={(e) => {setDate(e.target.value)}} value={date} required pattern="\d{4}-d{2}-\d{2}" />
                </p>
            </div>
            <button type="submit">Update Task</button>

        </form>

    )
}

export default UpdateTask