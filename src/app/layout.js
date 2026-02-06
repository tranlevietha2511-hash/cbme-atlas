import "./globals.css";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "CBME Atlas",
  description: "CBME Atlas – competency-based medical education dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <div className="container">
          <header className="header">
            <h1>{process.env.NEXT_PUBLIC_APP_NAME || "CBME Atlas"}</h1>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/student">Student</a>
              <a href="/faculty">Faculty</a>
              <a href="/qa">QA</a>
              <a href="/tutor">Tutor</a>
              <a href="/admin">Admin</a>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">© {new Date().getFullYear()} CBME Atlas</footer>
        </div>
      </body>
    </html>
  );
}
