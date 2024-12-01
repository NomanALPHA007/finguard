// /app/page.tsx
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to FinGuard</h1>
      <p className="text-xl mb-4">
        Your personal financial assistant powered by blockchain and AI.
      </p>
      <div className="space-x-4">
        <a href="/learn" className="text-lg text-blue-500">
          Start Learning
        </a>
        <a href="/dashboard" className="text-lg text-blue-500">
          View Dashboard
        </a>
      </div>
    </div>
  );
};

export default HomePage;
