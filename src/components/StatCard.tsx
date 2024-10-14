// Path: src\components\StatCard.tsx
import React, { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div
      className={`${color} p-7 rounded-lg  flex flex-col items-center justify-center w-full`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-sm font-semibold mb-1">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
