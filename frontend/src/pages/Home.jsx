import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PasteForm from "../components/PasteForm";
import PasteList from "../components/PasteList";

import { getAllPastes } from "../services/api";

import "../styles/Home.css";

function Home() {
  const [pastes, setPastes] = useState([]);

  const loadPastes = async () => {
    try {
      const response = await getAllPastes();
      setPastes(response.data);
    } catch (error) {
      console.error(error);
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

        <PasteList
          pastes={pastes}
          refreshPastes={loadPastes}
        />
      </div>
    </>
  );
}

export default Home;