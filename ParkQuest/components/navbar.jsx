import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        ParkQuest
      </Link>
      <ul>

        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/parks">Parks</Link>
        </li>

        <li>
          <Link to="/activities">Activities</Link>
        </li>

      </ul>
    </nav>
  );
}
