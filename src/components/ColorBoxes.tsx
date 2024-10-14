// Path: src\components\ColorBoxes.tsx
import StatCard from "./StatCard";

// Path: src\components\ColorBoxes.tsx
const stats = [
  {
    title: "Employees",
    value: "96",
    icon: "👤",
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Clients",
    value: "3,650",
    icon: "📁",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    title: "Projects",
    value: "356",
    icon: "📬",
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Events",
    value: "696",
    icon: "🌟",
    color: "bg-red-100 text-red-500",
  },
  {
    title: "Payroll",
    value: "$96k",
    icon: "💬",
    color: "bg-green-100 text-green-500",
  },
  {
    title: "Reports",
    value: "59",
    icon: "🔗",
    color: "bg-blue-100 text-blue-500",
  },
];

const ColorBoxes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-6xl">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default ColorBoxes;
