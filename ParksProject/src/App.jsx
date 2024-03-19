import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';

const Dashboard = () => <h1>National Parks</h1>;
const Activities = () => <h1>Activities</h1>;
const Videos = () => <h1>Videos</h1>;
const NotFound = () => <h1>404 Not Found</h1>; 

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Parks</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/videos">Videos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 Not Found */}
      </Routes>
    </>
  );
}

export default App;
