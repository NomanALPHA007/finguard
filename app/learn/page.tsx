// /app/learn/page.tsx
import { FC } from "react";
import FinancialScenario from "@/components/FinancialScenario";

const LearnPage: FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Gamified Financial Learning</h1>
      <FinancialScenario />
    </div>
  );
};

export default LearnPage;
