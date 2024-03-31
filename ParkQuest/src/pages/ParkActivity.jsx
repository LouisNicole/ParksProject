import React, { useContext, useState, useEffect } from "react";
import handleFetch from "../utils/handleFetch";
import DataContext from "../context/DataContext";
import ParkCard from "../../components/ParkCard";
import SearchForm from "../utils/SearchForm";
import Activities from "../../components/Activities";

const ParkActivities = () => {
  const { parkData } = useContext(DataContext);
  const [filteredParks, setFilteredParks] = useState([]);

  useEffect(() => {
    setFilteredParks(parkData);
  }, [parkData]);

  const handleSearch = (query) => {
    const filtered = parkData.filter((park) =>
      park.activities.some((activity) =>
        activity.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredParks(filtered);
  };

  return (
    <div>
      <h1>Activities</h1>
      <SearchForm onSubmit={handleSearch} />
      <div className="grid grid-cols-5 gap-4">
        {filteredParks.map((park) => (
          <ParkCard key={park.parkCode} park={park} />
        ))}
      </div>
    </div>
  );
};

export default ParkActivities;
