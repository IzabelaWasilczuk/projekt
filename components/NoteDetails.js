"use client";

import { useState } from "react";

export default function NoteDetails({ note }) {
  if (!note) {
    return <p>Nie znaleziono notatki.</p>;
  }

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dane zapisane tylko w stanie komponentu (useState).");
  };

  return (
    <div
      style={{
        padding: "16px",
        background: "white",
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        maxWidth: "500px"
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        Edycja notatki
      </h1>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "4px" }}>Tytuł:</label>
        <input
          style={{ border: "1px solid #ccc", padding: "8px", width: "100%", marginBottom: "12px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label style={{ display: "block", marginBottom: "4px" }}>Opis:</label>
        <textarea
          style={{ border: "1px solid #ccc", padding: "8px", width: "100%", marginBottom: "12px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Zapisz (lokalnie)
        </button>
      </form>
    </div>
  );
}
