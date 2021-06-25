import TaskMasterList from '../components/TaskMasterList'

const HomePage = (props) => {
    const {hName} = props;

    return(
        <TaskMasterList hName={hName}/>
    )
}

export default HomePage;