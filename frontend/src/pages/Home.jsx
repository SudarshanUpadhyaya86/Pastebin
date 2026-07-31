import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PasteForm from "../components/PasteForm";
import PasteList from "../components/PasteList";

import { getAllPastes } from "../services/api";

import "../styles/Home.css";

function Home() {
  const [pastes, setPastes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPastes = async () => {
    try {
      setLoading(true);
      const response = await getAllPastes();
      setPastes(response.data || []);
    } catch (error) {
      console.error(error);
      setPastes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPastes();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <PasteForm refreshPastes={loadPastes} />

        {loading ? (
          <div className="loading-section">
            <div className="spinner-small"></div>
            <p>Loading pastes...</p>
          </div>
        ) : (
          <PasteList
            pastes={pastes}
            refreshPastes={loadPastes}
          />
        )}
      </div>
    </>
  );
}

export default Home;