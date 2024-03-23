import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import handleFetch from "../utils/handleFetch";
import APIKEY from "../utils/config";

const PARKSDATA = `https://developer.nps.gov/api/v1/parks?limit=429&fields=id,name,images&api_key=${APIKEY}`;

const ParksDataProvider = ({ children }) => {
  // state values where we will put the fetched data
  const [parkData, setParkData] = useState([]);
  const [error, setError] = useState("");

  // useEffect to run when the component renders
  useEffect(() => {
    // async function to actually do the fetch
    const fetchParkData = async () => {
      const [response, error] = await handleFetch(PARKSDATA);
      // if there is a response, set the dat
      if (response) {
        setParkData(response.data);
      }
      if (error) {
        setError(error.message);
      }
    };
    fetchParkData();
  }, []);

  console.log("Park Data:", parkData);
  console.log("Error:", error);

  return (
    <DataContext.Provider value={{ parkData, error }}>
      {children}
    </DataContext.Provider>
  );
};
export default ParksDataProvider;
