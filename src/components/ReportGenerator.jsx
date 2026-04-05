import { useState } from "react";
import {
  FileText,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Settings,
  X,
  Plus,
  Trash2
} from "lucide-react";

export default function ReportGenerator({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("generate");
  const [reportConfig, setReportConfig] = useState({
    name: "",
    type: "comprehensive",
    startDate: "",
    endDate: "",
    categories: [],
    format: "pdf",
    includeCharts: true,
    includeSummary: true,
    includeDetails: true
  });

  const [scheduledReports, setScheduledReports] = useState([
    {
      id: 1,
      name: "Monthly Financial Report",
      frequency: "Monthly",
      nextRun: "2026-05-05",
      lastRun: "2026-04-05",
      recipients: ["user@example.com"],
      enabled: true
    },
    {
      id: 2,
      name: "Quarterly Summary",
      frequency: "Quarterly",
      nextRun: "2026-07-05",
      lastRun: "2026-01-05",
      recipients: ["user@example.com"],
      enabled: true
    }
  ]);

  const [reportHistory, setReportHistory] = useState([
    {
      id: 1,
      name: "February 2026 Report",
      type: "comprehensive",
      date: "2026-03-01",
      size: "2.4 MB",
      status: "completed"
    },
    {
      id: 2,
      name: "January 2026 Report",
      type: "budget",
      date: "2026-02-01",
      size: "1.8 MB",
      status: "completed"
    },
    {
      id: 3,
      name: "Q1 2026 Summary",
      type: "comprehensive",
      date: "2026-04-01",
      size: "3.2 MB",
      status: "completed"
    }
  ]);

  const categories = [
    "Income", "Expenses", "Savings", "Investments",
    "Budget Analysis", "Trends", "Predictions", "Recommendations"
  ];

  const handleCategoryToggle = (category) => {
    setReportConfig(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleGenerateReport = () => {
    if (!reportConfig.name || !reportConfig.startDate || !reportConfig.endDate) {
      alert("Please fill in all required fields");
      return;
    }

    alert(`Report "${reportConfig.name}" generated successfully as ${reportConfig.format.toUpperCase()}!`);
    
    // Add to history
    setReportHistory(prev => [{
      id: prev.length + 1,
      name: reportConfig.name,
      type: reportConfig.type,
      date: new Date().toISOString().split('T')[0],
      size: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(Math.random() * 9)}MB`,
      status: "completed"
    }, ...prev]);

    setReportConfig({
      name: "",
      type: "comprehensive",
      startDate: "",
      endDate: "",
      categories: [],
      format: "pdf",
      includeCharts: true,
      includeSummary: true,
      includeDetails: true
    });
  };

  const handleDeleteSchedule = (id) => {
    setScheduledReports(prev => prev.filter(r => r.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Report Generator</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab("generate")}
            className={`flex-1 py-4 px-6 font-medium transition-colors border-b-2 ${
              activeTab === "generate"
                ? "text-blue-600 dark:text-blue-400 border-blue-500"
                : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Download className="w-4 h-4 inline mr-2" />
            Generate Report
          </button>
          <button
            onClick={() => setActiveTab("scheduled")}
            className={`flex-1 py-4 px-6 font-medium transition-colors border-b-2 ${
              activeTab === "scheduled"
                ? "text-blue-600 dark:text-blue-400 border-blue-500"
                : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Scheduled Reports
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-4 px-6 font-medium transition-colors border-b-2 ${
              activeTab === "history"
                ? "text-blue-600 dark:text-blue-400 border-blue-500"
                : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Report History
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Generate Tab */}
          {activeTab === "generate" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Report Name *
                </label>
                <input
                  type="text"
                  value={reportConfig.name}
                  onChange={(e) => setReportConfig({ ...reportConfig, name: e.target.value })}
                  placeholder="e.g., February 2026 Financial Summary"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Report Type
                  </label>
                  <select
                    value={reportConfig.type}
                    onChange={(e) => setReportConfig({ ...reportConfig, type: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="comprehensive">Comprehensive</option>
                    <option value="budget">Budget Analysis</option>
                    <option value="spending">Spending Patterns</option>
                    <option value="savings">Savings Goals</option>
                    <option value="investment">Investment Summary</option>
                    <option value="tax">Tax Report</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Export Format
                  </label>
                  <select
                    value={reportConfig.format}
                    onChange={(e) => setReportConfig({ ...reportConfig, format: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pdf">PDF</option>
                    <option value="csv">CSV</option>
                    <option value="excel">Excel</option>
                    <option value="html">HTML</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    value={reportConfig.startDate}
                    onChange={(e) => setReportConfig({ ...reportConfig, startDate: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    value={reportConfig.endDate}
                    onChange={(e) => setReportConfig({ ...reportConfig, endDate: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Report Sections
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center p-3 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={reportConfig.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Report Options
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={reportConfig.includeCharts}
                      onChange={(e) => setReportConfig({ ...reportConfig, includeCharts: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Include Charts & Graphs</span>
                  </label>
                  <label className="flex items-center p-3 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={reportConfig.includeSummary}
                      onChange={(e) => setReportConfig({ ...reportConfig, includeSummary: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Include Executive Summary</span>
                  </label>
                  <label className="flex items-center p-3 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <input
                      type="checkbox"
                      checked={reportConfig.includeDetails}
                      onChange={(e) => setReportConfig({ ...reportConfig, includeDetails: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-300">Include Detailed Transactions</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleGenerateReport}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate & Download
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Scheduled Tab */}
          {activeTab === "scheduled" && (
            <div className="space-y-6">
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
                <Plus className="w-4 h-4 mr-2" />
                Create Scheduled Report
              </button>

              <div className="space-y-4">
                {scheduledReports.map((report) => (
                  <div
                    key={report.id}
                    className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{report.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {report.frequency} • Last run: {report.lastRun}
                        </p>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={report.enabled}
                            className="sr-only"
                          />
                          <div className={`w-10 h-6 rounded-full transition-colors ${
                            report.enabled ? 'bg-green-500' : 'bg-slate-300'
                          }`}></div>
                          <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            report.enabled ? 'translate-x-4' : ''
                          }`}></div>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <span>
                        <Mail className="w-4 h-4 inline mr-1" />
                        {report.recipients.join(", ")}
                      </span>
                      <span>Next: {report.nextRun}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteSchedule(report.id)}
                      className="w-full px-3 py-2 border border-red-300 dark:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded transition-colors flex items-center justify-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === "history" && (
            <div className="space-y-4">
              {reportHistory.map((report) => (
                <div
                  key={report.id}
                  className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{report.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {report.date} • {report.type} • {report.size}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{report.status}</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
