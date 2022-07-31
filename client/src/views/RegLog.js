import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn'
import classes from '../cssModules/RegLog.module.css'

const RegLog = (props) => {
    const { setHName } = props;
    return (
        <div className={classes.HomePageDiv}>
            <div className={classes.Container}>
                <div className={classes.Header}>
                    <h1>Become a Task Master today!</h1>
                </div>
                <div className={classes.RegLogSection}>
                    <SignUp setHName={setHName}/>
                    <LogIn setHName={setHName} />
                </div>
            </div>
        </div>

    )
}

export default RegLog;