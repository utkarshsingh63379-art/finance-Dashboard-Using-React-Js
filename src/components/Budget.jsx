import { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function Budget({ transactions }) {
  const [budget, setBudget] = useState(5000);

  const expense = transactions.filter(t => t.type === "Expense").reduce((a, b) => a + b.amount, 0);

  const isOverBudget = expense > budget;
  const budgetUsed = (expense / budget) * 100;

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
        {isOverBudget ? (
          <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
        ) : (
          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
        )}
        Budget Tracker
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Monthly Budget
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
            <span>Spent: ₹{expense}</span>
            <span>Budget: ₹{budget}</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                isOverBudget ? 'bg-red-500' : budgetUsed > 80 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(budgetUsed, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {budgetUsed.toFixed(1)}% used
          </p>
        </div>

        {isOverBudget && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <p className="text-red-700 dark:text-red-400 text-sm font-medium flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Over Budget by ₹{expense - budget}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}