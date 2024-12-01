// /app/dashboard/page.tsx
import { FC } from 'react';

const DashboardPage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Financial Dashboard</h1>
      <div className="mt-4">
        {/* Add charts or financial data components here */}
        <p>Your financial data and performance metrics will appear here.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
