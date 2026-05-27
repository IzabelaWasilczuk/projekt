"use client";

import Link from "next/link";

export default function NoteList({ notes }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {notes.map((n) => (
        <li
          key={n.id}
          style={{
            padding: "12px",
            marginBottom: "8px",
            background: "white",
            borderRadius: "4px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ fontWeight: "bold" }}>{n.title}</h2>
          <p>{n.description}</p>
          <Link
            href={`/notes/${n.id}`}
            style={{ color: "blue", textDecoration: "underline", marginTop: "8px", display: "inline-block" }}
          >
            Otwórz
          </Link>
        </li>
      ))}
    </ul>
  );
}
