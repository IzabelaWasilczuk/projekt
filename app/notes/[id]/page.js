import { notes } from "@/data/notes";
import NoteDetails from "@/components/NoteDetails";

export default function NotePage({ params }) {
  const note = notes.find((n) => n.id === params.id);

  return <NoteDetails note={note} />;
}
