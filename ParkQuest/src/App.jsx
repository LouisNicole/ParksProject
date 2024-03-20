import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from '../components/navbar';
import API_KEY from './utils/config';
import handleFetch from './utils/handleFetch';
const Dashboard = () => <h1>National Parks</h1>;
const Activities = () => <h1>Activities</h1>;
const Videos = () => <h1>Videos</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

function App() {
  //vv setting up the state for the fetched gifs 
  //vv data is container for the fetched gifs, and setdata allows us to change whats in the container
  const [data, setData] = useState(null);
  // vv erros is container for the fetched error, seterror changes to what exactly the error is
  const [error, setError] = useState('')

  //vv fetch the gifs, either going to get the data or the error
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(`https://developer.nps.gov/${API_KEY}/v1/parks`)
      // the component that uses this data will rerender 
      if (data) setData(data)
      if (error) setError(error)
    };

    doFetch();
  }, [])
  if (error) return <p>{error.message}</p>
  console.log(data)



  //render the components: 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
