import { useState, useEffect } from "react";
import { Wallet, TrendingUp, TrendingDown, PiggyBank, Target, DollarSign } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Transactions from "../components/Transactions";
import Budget from "../components/Budget";
import Insights from "../components/Insights";
import BalanceChart from "../components/BalanceChart";
import PieChartBox from "../components/PieChartBox";
import Goals from "../components/Goals";
import RecurringTransactions from "../components/RecurringTransactions";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([
    { date: "2024-04-01", amount: 500, category: "Food", type: "Expense" },
    { date: "2024-04-02", amount: 2000, category: "Salary", type: "Income" }
  ]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const income = transactions
    .filter(t => t.type === "Income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "Expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Sidebar />

      <div className="flex-1 p-8 space-y-8">
        {/* HEADER */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Financial Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Track your income, expenses, and financial goals
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-slate-500 dark:text-slate-400">
              <Wallet className="w-8 h-8" />
              <span className="text-sm font-medium">Personal Finance</span>
            </div>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Balance</p>
                <p className="text-2xl font-bold">₹{income - expense}</p>
              </div>
              <Wallet className="w-10 h-10 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Total Income</p>
                <p className="text-2xl font-bold">₹{income}</p>
              </div>
              <TrendingUp className="w-10 h-10 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Total Expenses</p>
                <p className="text-2xl font-bold">₹{expense}</p>
              </div>
              <TrendingDown className="w-10 h-10 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Net Savings</p>
                <p className="text-2xl font-bold">₹{income - expense}</p>
              </div>
              <PiggyBank className="w-10 h-10 opacity-80" />
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-500" />
              Balance Overview
            </h2>
            <BalanceChart transactions={transactions} />
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-green-500" />
              Expense Breakdown
            </h2>
            <PieChartBox transactions={transactions} />
          </div>
        </div>

        {/* BUDGET + INSIGHTS + GOALS */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <Budget transactions={transactions} />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <Insights transactions={transactions} />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <Goals transactions={transactions} />
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Recent Transactions</h2>
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
            role="admin"
          />
        </div>

        {/* RECURRING TRANSACTIONS */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Recurring Transactions</h2>
          <RecurringTransactions
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>
      </div>
    </div>
  );
}