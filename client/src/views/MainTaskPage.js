import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { navigate } from '@reach/router';
import axios from 'axios';
import classes from '../cssModules/MainTaskPage.module.css';

const MainTaskPage = (props) => {
    const { hName } = props;
    const logout = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/taskmaster/logout', {}, { withCredentials: true })
            .then(res => {
                console.log('You have successfully logged out!')
                navigate('/register')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.MainTaskPageDiv}>
            <div className={classes.Container}>

            
            <ul className={classes.Header}>
                <li>
                    <h1>Welcome Task Master</h1>
                </li>
                <li>
                    <h1>{hName}</h1>
                </li>
            </ul>
            <div className={classes.MidContent}>
                
                    <TaskForm />
                
                
                    <TaskList />
                
            </div>
            <ul className={classes.Footer}>
                <li>
                    <h1 onClick={() => navigate('/homepage')}>Home</h1>
                </li>
                <li>
                    <h1 onClick={logout}>Logout</h1>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default MainTaskPage