import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import classes from '../cssModules/TaskForm.module.css'

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
    }, [id])

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
            }, [])
    }

    return (
        <form onSubmit={updateTask}>
            <h1>Edit Task</h1>
            <div className={classes.Div}>
                <table className={classes.table}>
                    <tr>
                        <th className={classes.tablehead}>Task Name</th>
                        <th className={classes.tablehead}>Task Description</th>
                        <th className={classes.tablehead3}>Task Date</th>
                    </tr>

                    <tr>
                        <td className={classes.tabledata}><input
                            type='text'
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Input Task name"
                            className={classes.input}>
                        </input></td>
                        <td className={classes.tabledata}><input
                            type='text'
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            placeholder="Input Task description"
                            className={classes.input}>
                        </input></td>
                        <td className={classes.tabledata3}><input
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="Select Task date"
                            className={classes.input}>
                        </input></td>
                    </tr>
                </table>
            </div>
            <button type="submit" className={classes.button}>Update Task</button>
        </form>
        
    )
}

export default UpdateTask