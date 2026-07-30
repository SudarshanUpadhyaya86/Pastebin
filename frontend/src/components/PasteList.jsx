import PasteCard from "./PasteCard";

function PasteList({ pastes, refreshPastes }) {
  return (
    <>
      <h2>All Pastes</h2>

      {pastes.length === 0 ? (
        <p>No pastes found.</p>
      ) : (
        pastes.map((paste) => (
          <PasteCard
            key={paste.id}
            paste={paste}
            refreshPastes={refreshPastes}
          />
        ))
      )}
    </>
  );
}

export default PasteList;