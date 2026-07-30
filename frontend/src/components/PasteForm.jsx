import { useState } from "react";
import { createPaste } from "../services/api";
import "../styles/PasteForm.css";

function PasteForm({ refreshPastes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Fill all fields");
      return;
    }

    try {
      await createPaste({
        title,
        content,
      });

      setTitle("");
      setContent("");

      refreshPastes();
    } catch (error) {
      console.error(error);
      alert("Failed to create paste");
    }
  };

  return (
    <form className="paste-form" onSubmit={handleSubmit}>
      <h2>Create Paste</h2>

      <input
        type="text"
        placeholder="Paste title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="8"
        placeholder="Write your paste..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button>Create Paste</button>
    </form>
  );
}

export default PasteForm;