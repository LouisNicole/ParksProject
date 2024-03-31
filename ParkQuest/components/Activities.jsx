import React, { useState } from "react";
import handleFetch from "../src/utils/handleFetch";
import ParkCard from "../components/ParkCard";
import APIKEY from "../src/utils/config";

const Activities = ({ setData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = `https://developer.nps.gov/api/v1/activities/parks?api_key=${APIKEY}&q=${searchTerm}`;
      console.log("Search URL:", searchUrl);
      const response = await handleFetch(searchUrl);
      if (response && response[0]?.data[0]?.parks.length > 0) {
        const parksData = response[0].data[0].parks;
        setData(parksData);
      } else {
        console.log("No parks found with the activity");
      }
      setSearchTerm("");
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Search for Activities: </label>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Activities;
