export default function StatCard({ title, value, color }) {
  return (
    <div className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800 dark:text-white flex justify-between items-center transition-all duration-300 hover:scale-105">
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>

      <div className={`w-10 h-10 rounded-lg ${color}`}></div>
    </div>
  );
}