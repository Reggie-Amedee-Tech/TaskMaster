import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn'

const RegLog = (props) => {
const {setHName} = props;
    return (
        <div>
            <h1>Become a Task Master today!</h1>

        

        <div style={{display: "flex",
        justifyContent: "space-around"}}>

            <SignUp />
            <LogIn setHName={setHName}/>
        </div>
        </div>

    )
}

export default RegLog;