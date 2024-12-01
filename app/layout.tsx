import React from "react";
import "./globals.css"; // Import global styles here

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-bold">FinGuard - Financial Learning</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/learn">Learn</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
