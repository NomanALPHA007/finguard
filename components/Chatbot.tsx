import { FC } from "react";
import Chatbot from "@/components/Chatbot"; // Import the Chatbot component

const HomePage: FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between text-black font-sans">
      <div className="max-w-6xl mx-auto p-8 text-center space-y-8">
        {/* Header Section */}
        <div>
          <h1 className="text-5xl font-extrabold text-black mb-4">
            Welcome to FinGuard
          </h1>
          <p className="text-lg text-gray-700 font-light mb-8">
            Empowering you with financial literacy through gamified,
            blockchain-enabled, and AI-driven education.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-800">
            FinGuard transforms financial education into a dynamic, accessible,
            and rewarding experience. We leverage blockchain, AI, and community
            collaboration to simplify financial concepts and make them relevant
            for everyone.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            What Makes Us Special?
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Holistic Financial Education
              </h3>
              <p className="text-gray-700">
                We cover budgeting, investing, taxes, and more to give you a
                complete financial education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                AI-Driven Guidance
              </h3>
              <p className="text-gray-700">
                Personalized financial plans tailored to your unique situation
                and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="/learn"
            className="bg-green-600 text-white text-lg py-3 px-6 rounded-full shadow-md hover:bg-green-700 transition-all"
          >
            Start Learning
          </a>
          <a
            href="/dashboard"
            className="bg-black text-white text-lg py-3 px-6 rounded-full shadow-md hover:bg-gray-900 transition-all"
          >
            View Dashboard
          </a>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="fixed bottom-4 right-4">
        <Chatbot />
      </div>
    </div>
  );
};

export default HomePage;
