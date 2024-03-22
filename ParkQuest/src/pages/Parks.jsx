import { useContext } from "react";
import DataContext from "../context/DataContext";
import ParkCard from "../../components/ParkCard";
import ParksDataProvider from "../context/DataContextProvider";

const Parks = () => {
  const { parkData } = useContext(DataContext);
  console.log(parkData);
  return (
    <>
      <h1 className="text-center mb-8 text-2xl font-bold">All Parks</h1>
      <section className="grid grid-cols-5 gap-4">
        {parkData?.map((park) => (
          <ParkCard key={park.parkCode} park={park} />
        ))}
      </section>
    </>
  );
};

export default Parks;
