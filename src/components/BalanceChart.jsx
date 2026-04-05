import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function BalanceChart({ transactions = [] }) {
  const data = transactions.map(t => ({
    name: t.date,
    amount: Number(t.amount) || 0
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded">
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="amount" stroke="#3b82f6" />
      </LineChart>
    </div>
  );
}