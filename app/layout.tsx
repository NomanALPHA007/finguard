import "./globals.css";

export const metadata = {
  title: "FinGuard",
  description: "Your personal finance management tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional <head> content (e.g., meta tags, title) can go here */}
      </head>
      <body>
        <header className="bg-gray-900 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/learn">Learn</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white p-4 text-center">
          <p>&copy; 2024 FinGuard</p>
        </footer>
      </body>
    </html>
  );
}
