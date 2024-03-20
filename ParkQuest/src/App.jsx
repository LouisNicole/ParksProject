import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Dashboard = () => <h1>National Parks</h1>;
const Activities = () => <h1>Activities</h1>;
const Videos = () => <h1>Images</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Parks</Link>
            </li>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              <Link to="/videos">Images</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>{/* dev information will go here*/}</footer>
    </>
  );
}

export default App;
