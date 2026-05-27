"use client";

import { notes } from "@/data/notes";
import NoteList from "@/components/NoteList";

export default function NotesPage() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Lista notatek
      </h1>
      <NoteList notes={notes} />
    </div>
  );
}
