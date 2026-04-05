import { useState } from "react";
import { Search, Filter, Download, Edit, Trash2, Plus, X } from "lucide-react";

const categories = ["Food", "Transport", "Entertainment", "Salary", "Freelance", "Utilities", "Healthcare", "Education", "Other"];

export default function Transactions({ transactions, setTransactions, role }) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "Expense"
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleAdd = () => {
    if (!form.date || !form.amount || !form.category) return;

    if (editingIndex !== null) {
      const updated = [...transactions];
      updated[editingIndex] = { ...form, amount: Number(form.amount) };
      setTransactions(updated);
      setEditingIndex(null);
    } else {
      setTransactions([
        ...transactions,
        { ...form, amount: Number(form.amount) }
      ]);
    }

    setForm({ date: "", amount: "", category: "", type: "Expense" });
  };

  const handleEdit = (index) => {
    setForm(transactions[index]);
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setForm({ date: "", amount: "", category: "", type: "Expense" });
    setEditingIndex(null);
  };

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = search === "" || t.category.toLowerCase().includes(search.toLowerCase()) || t.amount.toString().includes(search);
    const matchesType = filterType === "" || t.type === filterType;
    const matchesCategory = filterCategory === "" || t.category === filterCategory;
    return matchesSearch && matchesType && matchesCategory;
  });

  const exportToCSV = () => {
    const csv = [
      ["Date", "Category", "Type", "Amount"],
      ...filteredTransactions.map(t => [t.date, t.category, t.type, t.amount])
    ].map(row => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Filters and Search */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by category or amount..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          >
            <option value="">All Types</option>
            <option>Expense</option>
            <option>Income</option>
          </select>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
          >
            <option value="">All Categories</option>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>

          <button
            onClick={exportToCSV}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {role === "admin" && (
        <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 flex items-center">
            {editingIndex !== null ? <Edit className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
            {editingIndex !== null ? "Edit Transaction" : "Add New Transaction"}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />

            <input
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />

            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option value="">Select Category</option>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
            </select>

            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option>Expense</option>
              <option>Income</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
            >
              {editingIndex !== null ? <Edit className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
              {editingIndex !== null ? "Update" : "Add"}
            </button>

            {editingIndex !== null && (
              <button
                onClick={handleCancelEdit}
                className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </button>
            )}
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-700/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Amount</th>
              {role === "admin" && (
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            {filteredTransactions.map((t, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors duration-150">
                <td className="px-4 py-3 text-sm text-slate-900 dark:text-white">{t.date}</td>
                <td className="px-4 py-3 text-sm text-slate-900 dark:text-white">{t.category}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    t.type === 'Income'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {t.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">₹{t.amount}</td>
                {role === "admin" && (
                  <td className="px-4 py-3 text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(i)}
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-150"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          setTransactions(transactions.filter((_, idx) => idx !== i))
                        }
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-150"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-8 text-slate-500 dark:text-slate-400">
            No transactions found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}