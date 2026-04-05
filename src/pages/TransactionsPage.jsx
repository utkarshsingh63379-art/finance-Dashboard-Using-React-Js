import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Transactions from "../components/Transactions";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([
    { date: "2024-04-01", amount: 500, category: "Food", type: "Expense" },
    { date: "2024-04-02", amount: 2000, category: "Salary", type: "Income" }
  ]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Transactions
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage and track all your financial transactions
          </p>
        </div>

        {/* Transactions Component */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
            role="admin"
          />
        </div>
      </div>
    </div>
  );
}