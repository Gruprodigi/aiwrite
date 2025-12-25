import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface PieChartComponentProps {
  data: DataPoint[];
  title?: string;
  colors?: string[];
}

const defaultColors = ["#667eea", "#764ba2", "#f93e3e"];

export function PieChartComponent({
  data,
  title,
  colors = defaultColors,
}: PieChartComponentProps) {
  return (
    <div className="bg-white rounded-lg border border-[#e2e8f0] p-6 shadow-sm">
      {title && <h3 className="text-lg font-bold text-[#1e293b] mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
