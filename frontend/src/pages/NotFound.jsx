import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
            }}
          >
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;