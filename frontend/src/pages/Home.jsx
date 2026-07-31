import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PasteForm from "../components/PasteForm";
import PasteList from "../components/PasteList";

import { getAllPastes } from "../services/api";

import "../styles/Home.css";

function Home() {
  const [pastes, setPastes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter pastes based on search query
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="container">
        <PasteForm refreshPastes={loadPastes} />

        <div className="search-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search pastes by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="search-results-text">
              {filteredPastes.length} result{filteredPastes.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        {loading ? (
          <div className="loading-section">
            <div className="spinner-small"></div>
            <p>Loading pastes...</p>
          </div>
        ) : (
          <PasteList
            pastes={filteredPastes}
            refreshPastes={loadPastes}
          />
        )}
      </div>
    </>
  );
}

export default Home;