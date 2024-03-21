import { useContext } from "react";
import DataContext from "../context/DataContext";
import ParkCard from "../../components/ParkCard";
import ParksDataProvider from "../context/DataContextProvider";

const Parks = () => {
  const { parkData } = useContext(DataContext);
  console.log(parkData);
  return (
    <>
      <h1>All Parks</h1>
      <section>
        <ul id="parks-list">
          {parkData?.map((park) => (
            <li key={park.parkCode}>
              <ParkCard park={park} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Parks;
