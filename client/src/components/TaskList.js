import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import io from 'socket.io-client';
import classes from '../cssModules/TaskList.module.css'


const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState("");
    const [socket] = useState(() => io(':8000'));

    const removeFromDom = (taskId) => {
        setTasks(tasks.filter(task => task._id !== taskId));
    }

    const deleteTask = (taskId) => {
        axios.delete('http://localhost:8000/api/task/' + taskId)
            .then(res => {
                removeFromDom(taskId)
            }, [])
    }

    useEffect(() => {
        console.log('inside of useEffect for socket');

        socket.on('task_added', (data) => {
            setTasks((currentAllTasksValue) => {
                return [data, ...currentAllTasksValue]
            })
        })
        return () => socket.disconnect()
    }, [socket])

    useEffect(() => {
        axios.get('http://localhost:8000/api/task/all',

            {
                withCredentials: true
            })
            .then(res => {
                setTasks(res.data)
                setLoaded(true)
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
                console.log(err.status)
            })
    }, [])

    return (
        <div>
            <h1>List Of Tasks!</h1>
            {loaded && tasks.map((task, i) => {
                return <div key={i} className={classes.Div}>
                    <table className={classes.table}>
                        <div className={classes.TaskListContainer}>
                        <tr className={classes.tablehead}>
                            <Link to={"/task/" + task._id} className={classes.tablehead}>{task.taskName}</Link>
                        </tr>
                        <td className={classes.tabledata}>
                            <button onClick={(e) => deleteTask(task._id)} className={classes.button}>Complete Task</button>
                        </td>
                        </div>
                    </table>
                </div>
            })}
        </div>
    )

}

export default TaskList;
