import React from "react";
import { useState, useEffect, useNavigate } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import "./singlePark.css";
import "./landing.css";
import Navbar from "../components/navbar";
import API_KEY from "./utils/config";
import handleFetch from "./utils/handleFetch";
import ParkCard from "../components/ParkCard";
import Parks from "./pages/Parks";
import OnePark from "./pages/SoloPark";
import Landing from "./pages/Landing";
import Activities from "../components/Activities";
import ParkActivities from "./pages/ParkActivity";


const Dashboard = () => <h1>National Parks</h1>;
const ParkDetails = () => <h1>Park Details</h1>;
// const Activities = () => <h1>Activities</h1>;
const Home = () => <h1>Home</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        <Route path="/home" element={<Landing />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/parks/:parkCode" element={<OnePark />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
