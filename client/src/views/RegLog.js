import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn'

const RegLog = () => {

    return (

        <div style={{display: "flex",
        justifyContent: "space-around"}}>

            <SignUp />
            <LogIn />
        </div>

    )
}

export default RegLog;