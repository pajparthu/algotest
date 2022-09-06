import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Header from './Components/Header'
import Welcome from './Components/Welcome'
import About from './Components/About'
import Users from './Components/Users'
import User from './Components/User'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/user/:id" element={<User />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
