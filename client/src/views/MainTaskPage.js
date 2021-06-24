import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import { navigate } from '@reach/router'

const MainTaskPage = () => {

    return(
        <div>
            <ul style={{display: 'flex',
        listStyleType:"none", justifyContent: "space-evenly", borderStyle: 'solid'}}>
                <li>
                    <h1>Welcome Task Master</h1>
                </li>
                <li>
                    <h1>Name</h1>
                </li>
            </ul>

        
        <div style={{display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'}}>
            <div style={{borderStyle: 'solid',
            width: '700px',
            height: '600px'
        }}>
            <TaskForm/>
            </div>
            <div style={{borderStyle: 'solid',
            width: '700px',
            height: '600px'
        }}>
            <TaskList/>
            </div>
            
        </div>
        <ul style={{display: 'flex',
        listStyleType:"none", justifyContent: "space-evenly", borderStyle: 'solid'}}>
                <li>
                    <h1 onClick={()=> navigate('/homepage')}>Home</h1>
                </li>
                <li>
                    <h1 onClick={()=> {localStorage.clear('tmtoken')
                navigate('/register')}}>Logout</h1>
                </li>
            </ul>
        
        </div>
        
        
    )
}

export default MainTaskPage