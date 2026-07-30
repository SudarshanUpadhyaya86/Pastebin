import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getPaste } from "../services/api";
import "../styles/ViewPaste.css";

function ViewPaste() {
  const { id } = useParams();

  const [paste, setPaste] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchPaste();
  }, []);

  const fetchPaste = async () => {
    try {
      const response = await getPaste(id);
      setPaste(response.data);
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="view-container">
          <h2>Loading...</h2>
        </div>
      </>
    );
  }

  if (notFound) {
    return (
      <>
        <Navbar />
        <div className="view-container">
          <h2>Paste not found</h2>

          <Link to="/">
            <button>Go Home</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="view-container">
        <div className="view-card">
          <h1>{paste.title}</h1>

          <small>
            {new Date(paste.created_at).toLocaleString()}
          </small>

          <pre>{paste.content}</pre>

          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ViewPaste;