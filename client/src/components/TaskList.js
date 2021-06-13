import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState("");



    useEffect(() => {
        axios.get('http://localhost:8000/api/task/all')
            .then(res => {
                setTasks(res.data)
                setLoaded(true)
            })
    })

    return (
        <div>


            {loaded && tasks.map((task, i) => {
                return <div key={i}>
                    <Link to={"/task/" + task._id} >{task.taskName}</Link>
                </div>
            })}
        </div>
    )

}

export default TaskList;
