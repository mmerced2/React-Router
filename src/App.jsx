import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Blue'
import Red from './Red'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue" >Blue</Link>
          <Link to="/red" >Red</Link>
          <Link to="/home" >Home</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
            <Route path="/home" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
