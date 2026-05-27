export const metadata = {
  title: "Next Exam App",
  description: "Prosta aplikacja na egzamin"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#f3f4f6" }}>
        <header style={{ padding: "16px", fontWeight: "bold", fontSize: "20px" }}>
          Moja aplikacja Next.js
        </header>
        <main style={{ padding: "16px" }}>{children}</main>
      </body>
    </html>
  );
}
