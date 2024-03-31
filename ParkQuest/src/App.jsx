import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import "./singlePark.css";
import Navbar from "../components/navbar";
import API_KEY from "./utils/config";
import handleFetch from "./utils/handleFetch";
import ParkCard from "../components/ParkCard";
import Parks from "./pages/Parks";
import OnePark from "./pages/SoloPark";
import Activities from "../components/Activities";
import ParkActivities from "./pages/ParkActivity";

const Dashboard = () => <h1>National Parks</h1>;
const ParkDetails = () => <h1>Park Details</h1>;

const Videos = () => <h1>Videos</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming 'url' is defined somewhere in your code
        const response = await handleFetch(searchUrl);
        setData(response);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<ParkActivities />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/parks/:parkCode" element={<OnePark />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* if i remove this vv, it removed 'park details' from appearing at the bottom */}
      {/* <ParkDetails /> */}
    </>
  );
}

export default App;
