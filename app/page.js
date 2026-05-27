import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Strona główna</h1>
      <p>Przejdź do listy notatek:</p>
      <Link href="/notes" style={{ color: "blue", textDecoration: "underline" }}>
        Przejdź do /notes
      </Link>
    </div>
  );
}
