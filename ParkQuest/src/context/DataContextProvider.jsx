import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import handleFetch from "../utils/handleFetch";
import APIKEY from "../utils/config";

const PARKSDATA = `https://developer.nps.gov/api/v1/parks?limit=50&fields=id,name,images&api_key=${APIKEY}`;

const ParksDataProvider = ({ children }) => {
  const [parkData, setParkData] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchParkData = async () => {
      const [response, error] = await handleFetch(PARKSDATA);
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
