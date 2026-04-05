import { BarChart3, TrendingUp, TrendingDown, Target } from "lucide-react";

export default function Insights({ transactions }) {
  const income = transactions.filter(t => t.type === "Income").reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.type === "Expense").reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  // Calculate insights
  const totalTransactions = transactions.length;
  const avgTransaction = totalTransactions > 0 ? (income + expense) / totalTransactions : 0;
  const savingsRate = income > 0 ? ((balance / income) * 100).toFixed(1) : 0;

  // Category breakdown
  const categoryExpenses = {};
  transactions.filter(t => t.type === "Expense").forEach(t => {
    categoryExpenses[t.category] = (categoryExpenses[t.category] || 0) + t.amount;
  });
  const topCategory = Object.entries(categoryExpenses).sort(([,a], [,b]) => b - a)[0];

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
        <BarChart3 className="w-5 h-5 mr-2 text-purple-500" />
        Financial Insights
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
              <div>
                <p className="text-xs text-green-700 dark:text-green-400 font-medium">Income</p>
                <p className="text-lg font-bold text-green-800 dark:text-green-300">₹{income}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <div className="flex items-center">
              <TrendingDown className="w-4 h-4 text-red-500 mr-2" />
              <div>
                <p className="text-xs text-red-700 dark:text-red-400 font-medium">Expenses</p>
                <p className="text-lg font-bold text-red-800 dark:text-red-300">₹{expense}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-sm text-slate-600 dark:text-slate-400">Net Balance</span>
            <span className={`font-semibold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₹{balance}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-sm text-slate-600 dark:text-slate-400">Savings Rate</span>
            <span className="font-semibold text-blue-600">{savingsRate}%</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <span className="text-sm text-slate-600 dark:text-slate-400">Avg Transaction</span>
            <span className="font-semibold text-purple-600">₹{avgTransaction.toFixed(0)}</span>
          </div>

          {topCategory && (
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Top Expense Category</span>
              <span className="font-semibold text-orange-600">{topCategory[0]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}