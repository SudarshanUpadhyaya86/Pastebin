import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getPaste, updatePaste } from "../services/api";
import "../styles/ViewPaste.css";

function ViewPaste() {
  const { id } = useParams();

  const [paste, setPaste] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPaste();
  }, []);

  const fetchPaste = async () => {
    try {
      const response = await getPaste(id);
      setPaste(response.data);
      setEditTitle(response.data.title);
      setEditContent(response.data.content);
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paste.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
      alert("Failed to copy to clipboard");
    }
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/paste/${id}`;
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

  const handleSaveEdit = async () => {
    if (!editTitle.trim() || !editContent.trim()) {
      alert("Title and content cannot be empty");
      return;
    }

    setSaving(true);
    try {
      const response = await updatePaste(id, {
        title: editTitle,
        content: editContent,
      });
      setPaste(response.data);
      setIsEditing(false);
      alert("Paste updated successfully!");
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
        alert(JSON.stringify(error.response.data));
      } else {
        console.log(error);
        alert(error.message);
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditTitle(paste.title);
    setEditContent(paste.content);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="view-container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading paste...</p>
          </div>
        </div>
      </>
    );
  }

  if (notFound) {
    return (
      <>
        <Navbar />
        <div className="view-container">
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <h2>Paste not found</h2>
            <p>The paste you're looking for doesn't exist or has been deleted.</p>
            <Link to="/">
              <button className="btn-home">Back to Home</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const formattedDate = new Date(paste.created_at).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isEditing) {
    return (
      <>
        <Navbar />
        <div className="view-container">
          <div className="view-card">
            <div className="edit-header">
              <h2>Edit Paste</h2>
            </div>

            <div className="edit-form">
              <div className="form-group">
                <label htmlFor="edit-title">Title</label>
                <input
                  id="edit-title"
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Paste title"
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="edit-content">Content</label>
                <textarea
                  id="edit-content"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="Paste content"
                  rows="12"
                />
              </div>

              <div className="edit-actions">
                <button
                  className="btn btn-save"
                  onClick={handleSaveEdit}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                <button
                  className="btn btn-cancel"
                  onClick={handleCancelEdit}
                  disabled={saving}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="view-container">
        <div className="view-card">
          <div className="view-header">
            <div className="header-content">
              <h1 className="view-title">{paste.title}</h1>
              <p className="view-meta">
                Created {formattedDate}
                <span className="separator">•</span>
                <span className="character-count">{paste.content.length} characters</span>
              </p>
            </div>

            <div className="view-actions">
              <button
                className={`btn btn-copy ${copied ? "copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
              <button className="btn btn-share" onClick={handleShare}>
                Share
              </button>
              <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <Link to="/">
                <button className="btn btn-back">Back</button>
              </Link>
            </div>
          </div>

          <div className="view-content">
            <pre className="paste-content">{paste.content}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPaste;