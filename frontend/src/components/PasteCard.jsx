import { Link } from "react-router-dom";
import { deletePaste } from "../services/api";
import "../styles/PasteCard.css";

function PasteCard({ paste, refreshPastes }) {
  const handleDelete = async () => {
    if (!window.confirm("Delete this paste? This cannot be undone.")) return;

    try {
      await deletePaste(paste.id);
      refreshPastes();
    } catch (error) {
      console.error(error);
      alert("Failed to delete paste");
    }
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/paste/${paste.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: paste.title,
          text: "Check out this paste!",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formattedDate = new Date(paste.created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="paste-card">
      <div className="card-header">
        <div className="card-title-section">
          <h3 className="card-title">{paste.title}</h3>
          <p className="card-meta">{formattedDate}</p>
        </div>
      </div>

      <div className="card-content">
        <p className="card-preview">
          {paste.content.length > 150
            ? paste.content.substring(0, 150) + "..."
            : paste.content}
        </p>
      </div>

      <div className="card-footer">
        <div className="card-stats">
          <span className="stat-item">
            <span className="stat-label">Characters:</span>
            <span className="stat-value">{paste.content.length}</span>
          </span>
        </div>

        <div className="card-actions">
          <Link to={`/paste/${paste.id}`} className="link-button">
            <button className="btn btn-view">View</button>
          </Link>

          <button className="btn btn-share" onClick={handleShare}>
            Share
          </button>

          <button className="btn btn-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasteCard;