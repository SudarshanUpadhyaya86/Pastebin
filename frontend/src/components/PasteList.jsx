import PasteCard from "./PasteCard";
import "../styles/PasteList.css";

function PasteList({ pastes, refreshPastes }) {
  return (
    <div className="paste-list">
      <div className="list-header">
        <h2>Your Pastes</h2>
        <p className="list-subtitle">{pastes.length} paste{pastes.length !== 1 ? "s" : ""} total</p>
      </div>

      <div className="list-container">
        {pastes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h3>No pastes yet</h3>
            <p>Create your first paste above to get started</p>
          </div>
        ) : (
          pastes.map((paste) => (
            <PasteCard
              key={paste.id}
              paste={paste}
              refreshPastes={refreshPastes}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PasteList;