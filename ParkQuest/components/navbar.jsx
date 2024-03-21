import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <li>
          <Link to="/parks">Parks</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
      </ul>
    </nav>
  );
}
