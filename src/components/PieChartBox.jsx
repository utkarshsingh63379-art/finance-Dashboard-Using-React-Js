import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function PieChartBox({ transactions = [] }) {
  const income = transactions
    .filter(t => t.type === "Income")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const expense = transactions
    .filter(t => t.type === "Expense")
    .reduce((a, b) => a + Number(b.amount || 0), 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded">
      <PieChart width={300} height={250}>
        <Pie data={data} dataKey="value">
          <Cell fill="#22c55e" />
          <Cell fill="#ef4444" />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}