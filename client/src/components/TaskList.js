import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import io from 'socket.io-client';


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
            .catch((err) => {console.log(JSON.stringify(err))
            console.log(err.status)
            })
    }, [])

    return (
        <div>
            <h1>List Of Tasks!</h1>


            {loaded && tasks.map((task, i) => {
                return <div key={i}>
                    <Link to={"/task/" + task._id} >{task.taskName}</Link>
                    <button onClick={(e) => deleteTask(task._id)}>Complete Task</button>
                </div>

            })}
        </div>

    )

}

export default TaskList;
