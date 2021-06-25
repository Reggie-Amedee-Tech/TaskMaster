import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import { navigate } from '@reach/router'
import axios from 'axios';

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
        <div>
            <ul style={{
                display: 'flex',
                listStyleType: "none", justifyContent: "space-evenly", borderStyle: 'solid'
            }}>
                <li>
                    <h1>Welcome Task Master</h1>
                </li>
                <li>
                    <h1>{hName}</h1>
                </li>

            </ul>


            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            }}>
                <div style={{
                    borderStyle: 'solid',
                    width: '700px',
                    height: '600px'
                }}>
                    <TaskForm />
                </div>
                <div style={{
                    borderStyle: 'solid',
                    width: '700px',
                    height: '600px'
                }}>
                    <TaskList />
                </div>

            </div>
            <ul style={{
                display: 'flex',
                listStyleType: "none", justifyContent: "space-evenly", borderStyle: 'solid'
            }}>
                <li>
                    <h1 onClick={() => navigate('/homepage')}>Home</h1>
                </li>

                <li>
                    <h1 onClick={logout}>Logout</h1>
                </li>

            </ul>

        </div>


    )
}

export default MainTaskPage