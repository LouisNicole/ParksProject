import { useContext } from "react";
import DataContext from "../context/DataContext";
import ParkCard from "../../components/ParkCard";

const Parks = () => {
  const { parkData } = useContext(DataContext);
  return (
    <>
      <h1>All Parks</h1>
      <section>
        <ul id="parks-list">
          {parkData.map((park) => (
            <li key={park.id}>
              <ParkCard parkData={park} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Parks;
