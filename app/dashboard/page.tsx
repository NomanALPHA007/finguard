import { FC } from "react";
import Link from "next/link";

const Dashboard: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-6">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, User
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <Link href="/profile">
            <button className="text-gray-600 hover:text-blue-500">
              Profile
            </button>
          </Link>
        </div>
      </header>

      {/* Financial Overview */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-800">Account Balance</h3>
          <p className="text-3xl font-semibold text-green-600">$10,500.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-800">
            Recent Transactions
          </h3>
          <ul>
            <li className="text-gray-600">Payment to XYZ: $200</li>
            <li className="text-gray-600">Deposit from ABC: $500</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-800">Key Insights</h3>
          <p className="text-gray-600">
            You saved 10% more this month compared to last month!
          </p>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mt-8">
        <h3 className="text-xl font-medium text-gray-800">Recent Activity</h3>
        <ul className="bg-white p-6 rounded-lg shadow-md mt-4">
          <li className="py-2 text-gray-700">
            Transaction: Rent Payment - $1200
          </li>
          <li className="py-2 text-gray-700">Investment: Buy Stocks - $500</li>
        </ul>
      </section>

      {/* Alerts Section */}
      <section className="mt-8 bg-yellow-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-medium text-gray-800">
          Alerts & Notifications
        </h3>
        <ul className="mt-4">
          <li className="text-orange-600">
            Low Balance Alert: $10500.00 remaining in your account!
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
