import MainTaskPage from './views/MainTaskPage'
import DetailedTask from './views/DetailedTask'
import UpdateTask from './views/UpdateTask'
import RegLog from './views/RegLog'
import { Router } from '@reach/router'
import HomePage from './views/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/homepage"/>
        <RegLog path='/register'/>
        <MainTaskPage path='/create'/>
        <DetailedTask path='/task/:id'/>
        <UpdateTask path='/task/:id/edit'/>
      </Router>

    </div>
  );
}

export default App;
