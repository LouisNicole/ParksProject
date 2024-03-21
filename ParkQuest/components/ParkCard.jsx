import { Link } from "react-router-dom";

const ParkCard = ({ park }) => {
  console.log(park);
  if (park.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="park card">
      <h2 className="park-name">{park.fullName}</h2>
      {console.log("Park Name:", park.fullName)}

      {/* <p className="park-description">{park.description}</p> */}

      {/* <div className="park-activities">
        <h3>Activities:</h3>
        <ul>
          {park.activities.map((activity) => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div> */}

      <Link to={`/parks/${park.parkCode}`}>
        {park.images && park.images.length > 0 && (
          <img alt={park.fullName} src={`${park.images[0]?.url}`} />
        )}
      </Link>
    </div>
  );
};
export default ParkCard;
