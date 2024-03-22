import { Link } from "react-router-dom";
//

//
const ParkCard = ({ park }) => {
  console.log(park);
  if (park.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="park-card">
      {console.log("Park Name:", park.fullName)}

      <Link to={`/parks/${park.parkCode}`}>
        <h2 className="park-name">{park.fullName}</h2>
        <div className="park-image">
          {park.images && park.images.length > 0 && (
            <img alt={park.fullName} src={`${park.images[0]?.url}`} />
          )}
        </div>
      </Link>
    </div>
  );
};

export default ParkCard;
