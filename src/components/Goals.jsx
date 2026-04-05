import { useState } from "react";
import { Target, Plus, TrendingUp } from "lucide-react";

export default function Goals({ transactions }) {
  const [goals, setGoals] = useState([
    { name: "Emergency Fund", target: 10000, current: 0 },
    { name: "Vacation", target: 5000, current: 0 }
  ]);
  const [newGoal, setNewGoal] = useState({ name: "", target: "" });

  const addGoal = () => {
    if (!newGoal.name || !newGoal.target) return;
    setGoals([...goals, { ...newGoal, target: Number(newGoal.target), current: 0 }]);
    setNewGoal({ name: "", target: "" });
  };

  const updateProgress = (index, amount) => {
    const updated = [...goals];
    updated[index].current += Number(amount);
    setGoals(updated);
  };

  const totalSavings = transactions
    .filter(t => t.type === "Income")
    .reduce((a, b) => a + b.amount, 0) -
    transactions
    .filter(t => t.type === "Expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
        <Target className="w-5 h-5 mr-2 text-indigo-500" />
        Financial Goals
      </h3>

      <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Total Available Savings</p>
        <p className="text-2xl font-bold text-green-600">₹{totalSavings}</p>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <input
            placeholder="Goal Name"
            value={newGoal.name}
            onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
          />
          <input
            type="number"
            placeholder="Target Amount"
            value={newGoal.target}
            onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
          />
        </div>
        <button
          onClick={addGoal}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((goal, i) => {
          const progress = Math.min((goal.current / goal.target) * 100, 100);
          const isCompleted = goal.current >= goal.target;

          return (
            <div key={i} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4 bg-white dark:bg-slate-700/30">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">{goal.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ₹{goal.current.toLocaleString()} / ₹{goal.target.toLocaleString()}
                  </p>
                </div>
                {isCompleted && <TrendingUp className="w-5 h-5 text-green-500" />}
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isCompleted ? 'bg-green-500' : progress > 75 ? 'bg-blue-500' : 'bg-indigo-500'
                  }`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Add savings"
                  onBlur={(e) => updateProgress(i, e.target.value)}
                  className="flex-1 px-3 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
                <button
                  onClick={() => updateProgress(i, 100)}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition-colors duration-200"
                >
                  +₹100
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}