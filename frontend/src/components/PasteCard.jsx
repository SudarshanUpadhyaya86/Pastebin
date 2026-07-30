import { Link } from "react-router-dom";
import { deletePaste } from "../services/api";
import "../styles/PasteCard.css";

function PasteCard({ paste, refreshPastes }) {
  const handleDelete = async () => {
    if (!window.confirm("Delete this paste?")) return;

    try {
      await deletePaste(paste.id);
      refreshPastes();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="card">
      <h3>{paste.title}</h3>

        <p>
            {paste.content.length > 120
            ? paste.content.substring(0, 120) + "..."
            : paste.content}
        </p>

      <small>
        {new Date(paste.created_at).toLocaleString()}
      </small>

      <div className="buttons">
        <Link to={`/paste/${paste.id}`}>
          <button>View</button>
        </Link>

        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PasteCard;