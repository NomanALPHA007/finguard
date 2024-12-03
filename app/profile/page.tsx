import { FC } from "react";
import Link from "next/link";

const Profile: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-6">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Your Profile</h1>
      </header>

      {/* Personal Information */}
      <section className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">
          Personal Information
        </h2>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-3 rounded-lg"
          >
            Update Profile
          </button>
        </form>
      </section>

      {/* Activity Log */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-medium text-gray-800">Activity Log</h3>
        <ul className="mt-4 text-gray-600">
          <li>Changed password: 1 hour ago</li>
          <li>Updated contact info: 2 days ago</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
