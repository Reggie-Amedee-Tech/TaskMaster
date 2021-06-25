import MainTaskPage from './views/MainTaskPage'
import DetailedTask from './views/DetailedTask'
import UpdateTask from './views/UpdateTask'
import RegLog from './views/RegLog'
import { Router } from '@reach/router'
import HomePage from './views/HomePage'

import { useState } from 'react';
import './App.css';

function App() {
  const [hName, setHName] = useState('');

  return (
    <div className="App">
      
      <Router>
        <HomePage path="/homepage" hName={hName}/>
        <RegLog path='/register' setHName={setHName}/>
        <MainTaskPage path='/create' hName={hName}/>
        <DetailedTask path='/task/:id'/>
        <UpdateTask path='/task/:id/edit'/>
      </Router>

    </div>
  );
}

export default App;
