import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "ParkQuest/src/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/parks");
  };

  return (
    <div
      className="landing-container"
      style={{ backgroundImage: "url(/background.png)" }}
    >
      <h1>ParkQuest</h1>
      <p>Go on a quest using ParkQuest</p>
      <button onClick={handleExploreClick}>Explore national parks</button>
    </div>
  );
};

export default Landing;
