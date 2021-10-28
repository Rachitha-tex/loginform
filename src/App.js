import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import Login from './components/Login.js'
import Home from './components/Home.js';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home}/>
      </Router>
    </div>
  )
}

export default App

