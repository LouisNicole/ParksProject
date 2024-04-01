import { useNavigate } from "react-router-dom"; // Correctly imported

const Landing = () => {
    const navigate = useNavigate(); // Initialize navigate here

    return (
        <div className="landing-container">
            <h1>ParkQuest</h1>
            <p>Go on a quest using ParkQuest</p>
            <button onClick={() => navigate('/parks')}>Explore national parks</button>
        </div>
    );
};

export default Landing;
