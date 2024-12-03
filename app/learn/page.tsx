// D:/Lets Do It/fin-guard/finguard/app/learn/page.tsx
import { FC } from "react";
import Link from "next/link";

const Learn: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Learn Finance & Legal Topics
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      {/* Featured Content */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Featured Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* Add your featured content blocks here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">
              How to Create a Budget
            </h3>
            <p className="text-gray-500">
              A complete guide to managing your finances effectively.
            </p>
            <Link href="/learn/1">
              <button className="mt-4 text-blue-500 hover:text-blue-700">
                Read more
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">
              Understanding Islamic Banking
            </h3>
            <p className="text-gray-500">
              A beginner's guide to Islamic financial principles.
            </p>
            <Link href="/learn/2">
              <button className="mt-4 text-blue-500 hover:text-blue-700">
                Read more
              </button>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">
              Legal Rights in Finance
            </h3>
            <p className="text-gray-500">
              Learn about your legal protections in financial transactions.
            </p>
            <Link href="/learn/3">
              <button className="mt-4 text-blue-500 hover:text-blue-700">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-medium text-gray-800">
          Interactive Learning
        </h3>
        <p className="text-gray-600 mt-4">
          Take quizzes to test your knowledge on personal finance and legal
          topics.
        </p>
        <Link href="/learn/quiz">
          <button className="mt-4 text-blue-500 hover:text-blue-700">
            Start Quiz
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Learn;
