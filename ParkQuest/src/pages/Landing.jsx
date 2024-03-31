import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "ParkQuest/src/landing.css";

const Landing = () => {

    return (
        <div className="landing-container" style={{ backgroundImage: 'url(/background.png)' }}>
            <h1>ParkQuest</h1>
            <p>Go on a quest using ParkQuest</p>
            <button onClick={() => navigate('/parks')}>Explore national parks</button>
        </div>
    );
};

export default Landing;
