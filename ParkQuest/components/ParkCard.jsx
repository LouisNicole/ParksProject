import { Link } from "react-router-dom";

const ParkCard = ({ parkData }) => {
  return (
    <div className="park card">
      <h2 className="park-name">{parkData.fullName}</h2>
      {console.log("Park Name:", parkData.fullName)}
      <p className="park-description">{parkData.description}</p>
      <div className="park-activities">
        <h3>Activities:</h3>
        <ul>
          {parkData.activities.map((activity) => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div>
      <h2 className="park-state">{parkData.states}</h2>
      <h2 className="standard-hours"></h2>
      <Link to={`/parkData/${parkData.parkCode}`}>
        <img
          alt={parkData.fullName}
          src={`${parkData.images[0].url}/full/600,/0/default.jpg`}
        />
      </Link>
    </div>
  );
};

export default ParkCard;
