import React, {useState} from 'react';

import axios from 'axios'

const TaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [date, setDate] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/task' , {
            taskName,
            taskDescription,
            date
        })
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Add New Task!</h1>
            <div>

            
            <div>
            <p>
                <label>Task Name: <br/></label>
                <input type="text" onChange={(e)=> setTaskName(e.target.value)} value={taskName}/>
            </p>
            </div>
            <div>
            <p>
                <label>Task Description: <br/></label>
                <input type="text" onChange={(e)=> setTaskDescription(e.target.value)} value={taskDescription}/>
            </p>
            </div>
            <div>
            <p>
                <label>Task Date: <br/></label>
                <input type="date" onChange={(e)=> setDate(e.target.value)} value={date} required pattern="\d{4}-d{2}-\d{2}"/>
            </p>
            </div>
        <button type="submit">Submit Task!</button>
        </div>
            
        </form>

    )


}

export default TaskForm;