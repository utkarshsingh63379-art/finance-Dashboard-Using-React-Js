import { useState, useEffect } from "react";
import { Repeat, Plus, Calendar } from "lucide-react";

export default function RecurringTransactions({ transactions, setTransactions }) {
  const [recurring, setRecurring] = useState([
    { name: "Rent", amount: 1000, category: "Utilities", type: "Expense", frequency: "monthly" }
  ]);
  const [newRecurring, setNewRecurring] = useState({ name: "", amount: "", category: "", type: "Expense", frequency: "monthly" });

  const addRecurring = () => {
    if (!newRecurring.name || !newRecurring.amount || !newRecurring.category) return;
    setRecurring([...recurring, { ...newRecurring, amount: Number(newRecurring.amount) }]);
    setNewRecurring({ name: "", amount: "", category: "", type: "Expense", frequency: "monthly" });
  };

  const applyRecurring = (rec) => {
    const today = new Date().toISOString().split('T')[0];
    setTransactions([...transactions, { date: today, amount: rec.amount, category: rec.category, type: rec.type }]);
  };

  return (
    <div>
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          <input
            placeholder="Transaction Name"
            value={newRecurring.name}
            onChange={(e) => setNewRecurring({ ...newRecurring, name: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newRecurring.amount}
            onChange={(e) => setNewRecurring({ ...newRecurring, amount: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
          <input
            placeholder="Category"
            value={newRecurring.category}
            onChange={(e) => setNewRecurring({ ...newRecurring, category: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
          <select
            value={newRecurring.frequency}
            onChange={(e) => setNewRecurring({ ...newRecurring, frequency: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          >
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="yearly">Yearly</option>
          </select>
          <select
            value={newRecurring.type}
            onChange={(e) => setNewRecurring({ ...newRecurring, type: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
          <button
            onClick={addRecurring}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {recurring.map((rec, i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${rec.type === 'Income' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
                <Repeat className={`w-4 h-4 ${rec.type === 'Income' ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">{rec.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  ₹{rec.amount} • {rec.category} • {rec.frequency}
                </p>
              </div>
            </div>
            <button
              onClick={() => applyRecurring(rec)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}