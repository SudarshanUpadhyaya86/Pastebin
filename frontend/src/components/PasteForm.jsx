import { useState } from "react";
import { createPaste } from "../services/api";
import "../styles/PasteForm.css";

function PasteForm({ refreshPastes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);
    try {
      await createPaste({
        title,
        content,
      });

      setTitle("");
      setContent("");
      refreshPastes();
      alert("Paste created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create paste");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="paste-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Create a Paste</h2>
        <p className="form-subtitle">Share code, text, or notes instantly</p>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Give your paste a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="12"
          placeholder="Paste your code or text here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-create" disabled={loading}>
        {loading ? "Creating..." : "Create Paste"}
      </button>
    </form>
  );
}

export default PasteForm;