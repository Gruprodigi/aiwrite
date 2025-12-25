import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  color?: "blue" | "green" | "purple" | "orange";
}

const colorMap = {
  blue: { bg: "bg-blue-50", icon: "text-blue-500" },
  green: { bg: "bg-green-50", icon: "text-green-500" },
  purple: { bg: "bg-purple-50", icon: "text-purple-500" },
  orange: { bg: "bg-orange-50", icon: "text-orange-500" },
};

export function StatCard({
  label,
  value,
  change,
  icon,
  color = "blue",
}: StatCardProps) {
  const { bg, icon: iconColor } = colorMap[color];
  const isPositive = change && change > 0;

  return (
    <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#64748b] mb-2">{label}</p>
          <h3 className="text-3xl font-bold text-[#1e293b]">{value}</h3>
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {isPositive ? "+" : ""}{change}% vs mês anterior
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className={`p-4 rounded-xl ${bg}`}>
            <div className={`h-8 w-8 ${iconColor}`}>{icon}</div>
          </div>
        )}
      </div>
    </div>
  );
}
