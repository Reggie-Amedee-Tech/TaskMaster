import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import classes from '../cssModules/DetailedTasksPage.module.css'


const DetailedTask = (props) => {
    const [task, setTask] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/task/' + props.id,{withCredentials: true})
            .then(res => setTask({
                ...res.data
            }))
    })
    return (
        <>
        <div className={classes.div}>
            <div className={classes.Container}>

            
            <table className={classes.table}>
                <tbody>
                    <tr >
                        <th className={classes.tablehead}>Task Name</th>
                        <th className={classes.tablehead}>Task Description</th>
                        <th className={classes.tablehead3}>Task Date</th>
                    </tr>
                    <tr>
                        <td className={classes.tabledata}>{task.taskName}</td>
                        <td className={classes.tabledata}>{task.taskDescription}</td>
                        <td className={classes.tabledata3}>{task.date}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button onClick={() => navigate('/task/' + task._id + '/edit')} className={classes.button}>Edit</button>
        </div>
    </>
    )
}

export default DetailedTask;