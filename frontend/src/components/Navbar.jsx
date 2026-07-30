import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        PasteBin
      </Link>
    </nav>
  );
}

export default Navbar;