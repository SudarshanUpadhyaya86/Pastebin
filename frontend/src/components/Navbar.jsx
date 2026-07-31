import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo">
          <span className="logo-icon">{'</>'}</span>
          <span className="logo-text">PasteBin</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;