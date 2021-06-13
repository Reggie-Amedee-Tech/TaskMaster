import MainTaskPage from './views/MainTaskPage'
import DetailedTask from './views/DetailedTask'
import UpdateTask from './views/UpdateTask'
import { Router } from '@reach/router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MainTaskPage path='/create'/>
        <DetailedTask path='/task/:id'/>
        <UpdateTask path='/task/:id/edit'/>
      </Router>

    </div>
  );
}

export default App;
