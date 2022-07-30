import React, { useState } from 'react';
import axios from 'axios'
import io from 'socket.io-client';
import classes from '../cssModules/TaskForm.module.css'

const TaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [date, setDate] = useState("");
    const [socket] = useState(() => io(':8000'))

    const onSubmitHandler = (e) => {
        e.preventDefault();


        axios.post('http://localhost:8000/api/task', {
            taskName,
            taskDescription,
            date
        },
            { withCredentials: true })
            .then(res => {

                console.log(res)
                socket.emit('task_created', res.data)
                return () => socket.disconnect()

            })
            .catch(err => console.log(JSON.stringify(err)))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Add New Task!</h1>
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
            <button type="submit" className={classes.button}>Submit Task!</button>



        </form>



    )


}

export default TaskForm;