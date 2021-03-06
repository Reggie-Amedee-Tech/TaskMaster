import React, { useState } from 'react';
import axios from 'axios'
import io from 'socket.io-client';


const TaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [date, setDate] = useState("");
    const [socket] = useState(() => io(':8000'))

    const onSubmitHandler = (e) => {
        e.preventDefault();
        

        axios.post('http://localhost:8000/api/task' , {
            taskName,
            taskDescription,
            date
        },
        {withCredentials: true})
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
            <div>


                <div>
                    <p>
                        <label>Task Name: <br /></label>
                        <input type="text" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Task Description: <br /></label>
                        <input type="text" onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Task Date: <br /></label>
                        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required pattern="\d{4}-d{2}-\d{2}" />
                    </p>
                </div>
                
            </div>
            <button type="submit">Submit Task!</button>

            

        </form>

    

    )


}

export default TaskForm;