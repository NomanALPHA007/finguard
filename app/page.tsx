import { FC } from "react";
import ChatbotClient from "@/components/ChatbotClient"; // Adjust the import path

const HomePage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-semibold text-blue-800 mb-4 font-sans">
          Welcome to FinGuard
        </h1>
        <p className="text-xl text-gray-700 mb-6 font-serif">
          Your personal law & financial assistant powered by blockchain and AI.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto font-body">
          FinGuard transforms legal & financial education and guidance into a
          dynamic, accessible, and rewarding experience. Powered by AI and
          blockchain, we help you navigate law, finance, and wealth management.
        </p>
      </div>

      {/* Call-to-Action Links */}
      <div className="space-x-6 mb-8">
        <a
          href="/learn"
          className="text-lg text-white bg-blue-600 hover:bg-blue-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Start Learning
        </a>
        <a
          href="/dashboard"
          className="text-lg text-white bg-blue-600 hover:bg-blue-800 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          View Dashboard
        </a>
      </div>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-b from-white to-gray-100 text-center p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            AI-Driven Guidance
          </h3>
          <p className="text-sm text-gray-600">
            Personalized financial plans powered by AI to make learning engaging
            and actionable.
          </p>
        </div>
        <div className="bg-gradient-to-b from-white to-gray-100 text-center p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Decentralized Ecosystem
          </h3>
          <p className="text-sm text-gray-600">
            Contribute and vote on new features, projects, and educational
            content through blockchain.
          </p>
        </div>
        <div className="bg-gradient-to-b from-white to-gray-100 text-center p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Gamified Financial Learning
          </h3>
          <p className="text-sm text-gray-600">
            Unlock real-world rewards through interactive financial simulations
            and challenges.
          </p>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Ask our Legal & Finance Assistant
        </h3>
        <ChatbotClient />
      </div>
    </div>
  );
};

export default HomePage;
