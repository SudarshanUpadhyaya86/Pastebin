import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <>
      <Navbar />

      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon">404</div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          
          <Link to="/">
            <button className="btn-home">Return Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;