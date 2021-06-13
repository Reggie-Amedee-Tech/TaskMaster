import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const MainTaskPage = () => {

    return(
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
        
        
    )
}

export default MainTaskPage