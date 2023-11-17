// import './App.css'
import './App.css';
import Homepage from "./components/homepage.js"
import Home from "./components/userhome"
import Login from "./components/userlogin"
import Signup from "./components/usersignup"
import Ohome from "./components/orghome"
import Ologin from "./components/orglogin"
import Osignup from "./components/orgsignup"
import Onewevent from "./components/orgnewevent"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/userlogin" element={<Login/>}/>
          <Route path="/usersignup" element={<Signup/>}/>
          <Route path="/userhome" element={<Home/>}/>
          <Route path="/orglogin" element={<Ologin/>}/>
          <Route path="/orgsignup" element={<Osignup/>}/>
          <Route path="/orghome" element={<Ohome/>}/>
          <Route path="/orgnewevent" element={<Onewevent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;