import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  PieChart,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  DollarSign,
  Target,
  AlertCircle
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  Area,
  AreaChart
} from "recharts";

const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#06B6D4', '#F97316', '#84CC16'];

export default function Reports() {
  const [timeRange, setTimeRange] = useState("month");
  const [reportType, setReportType] = useState("overview");

  // Mock data - in real app, this would come from props or context
  const monthlyData = [
    { month: "Jan", income: 25000, expenses: 18500, savings: 6500 },
    { month: "Feb", income: 28000, expenses: 21000, savings: 7000 },
    { month: "Mar", income: 26000, expenses: 19500, savings: 6500 },
    { month: "Apr", income: 30000, expenses: 22000, savings: 8000 },
    { month: "May", income: 27500, expenses: 20000, savings: 7500 },
    { month: "Jun", income: 32000, expenses: 24000, savings: 8000 }
  ];

  const categoryData = [
    { name: "Food", value: 4500, percentage: 22.5 },
    { name: "Transport", value: 3200, percentage: 16 },
    { name: "Entertainment", value: 2800, percentage: 14 },
    { name: "Utilities", value: 3500, percentage: 17.5 },
    { name: "Healthcare", value: 2100, percentage: 10.5 },
    { name: "Education", value: 1800, percentage: 9 },
    { name: "Other", value: 2100, percentage: 10.5 }
  ];

  const weeklyTrends = [
    { week: "Week 1", income: 6500, expenses: 4800 },
    { week: "Week 2", income: 6800, expenses: 5200 },
    { week: "Week 3", income: 6200, expenses: 4500 },
    { week: "Week 4", income: 7000, expenses: 5800 }
  ];

  const budgetComparison = [
    { category: "Food", budgeted: 5000, actual: 4500, status: "under" },
    { category: "Transport", budgeted: 3000, actual: 3200, status: "over" },
    { category: "Entertainment", budgeted: 2500, actual: 2800, status: "over" },
    { category: "Utilities", budgeted: 4000, actual: 3500, status: "under" },
    { category: "Healthcare", budgeted: 2000, actual: 2100, status: "over" }
  ];

  const exportReport = () => {
    // Mock export functionality
    alert("Report exported successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Financial Reports
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Comprehensive analysis of your financial data
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200 flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
              <button
                onClick={exportReport}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-slate-500" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-500" />
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option value="overview">Overview</option>
              <option value="income">Income Analysis</option>
              <option value="expenses">Expense Analysis</option>
              <option value="budget">Budget Comparison</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Income</p>
                <p className="text-2xl font-bold text-green-600">₹168,500</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12.5% from last month
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">₹124,500</p>
                <p className="text-xs text-red-600 flex items-center mt-1">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  +8.2% from last month
                </p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Net Savings</p>
                <p className="text-2xl font-bold text-blue-600">₹44,000</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <Target className="w-3 h-3 mr-1" />
                  26.1% of income
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Budget Status</p>
                <p className="text-2xl font-bold text-orange-600">78%</p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  2 categories over budget
                </p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Main Chart */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
                {chartType === 'area' && <Area className="w-6 h-6 mr-2 text-blue-500" />}
                {chartType === 'bar' && <BarChart className="w-6 h-6 mr-2 text-blue-500" />}
                {chartType === 'line' && <LineChart className="w-6 h-6 mr-2 text-blue-500" />}
                {chartType === 'pie' && <PieChartIcon className="w-6 h-6 mr-2 text-blue-500" />}
                {chartType === 'radar' && <Activity className="w-6 h-6 mr-2 text-blue-500" />}
                {chartType === 'composed' && <Layers className="w-6 h-6 mr-2 text-blue-500" />}
                {reportType === 'overview' && 'Financial Overview'}
                {reportType === 'income' && 'Income Analysis'}
                {reportType === 'expenses' && 'Expense Analysis'}
                {reportType === 'budget' && 'Budget Comparison'}
                {reportType === 'predictive' && 'Predictive Analytics'}
                {reportType === 'ratios' && 'Financial Ratios'}
                {reportType === 'patterns' && 'Spending Patterns'}
              </h3>
              <div className="flex space-x-2">
                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
                  <Share className="w-4 h-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              {chartType === 'area' && (
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#F8FAFC',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area type="monotone" dataKey="income" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="expenses" stackId="2" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
                  {comparisonMode === 'yoy' && <Area type="monotone" dataKey="savings" stackId="3" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.4} />}
                </AreaChart>
              )}

              {chartType === 'bar' && (
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#F8FAFC',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="income" fill="#10B981" />
                  <Bar dataKey="expenses" fill="#EF4444" />
                  {comparisonMode === 'yoy' && <Bar dataKey="savings" fill="#3B82F6" />}
                </BarChart>
              )}

              {chartType === 'line' && (
                <LineChart data={weeklyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="week" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#F8FAFC',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line type="monotone" dataKey="income" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }} />
                  <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }} />
                  <Line type="monotone" dataKey="savings" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }} />
                </LineChart>
              )}

              {chartType === 'pie' && (
                <RechartsPieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              )}

              {chartType === 'radar' && (
                <RadarChart data={financialRatios}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Current" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                  <Radar name="Target" dataKey="target" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} />
                  <Tooltip />
                </RadarChart>
              )}

              {chartType === 'composed' && (
                <ComposedChart data={predictiveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#F8FAFC',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="predicted" fill="#3B82F6" fillOpacity={0.6} />
                  <Line type="monotone" dataKey="predicted" stroke="#3B82F6" strokeWidth={3} />
                </ComposedChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Secondary Chart or Analysis */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            {reportType === 'ratios' ? (
              <>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-indigo-500" />
                  Financial Ratios Analysis
                </h3>
                <div className="space-y-4">
                  {financialRatios.map((ratio, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-700 dark:text-slate-300">{ratio.name}</span>
                          <span className="font-medium">{ratio.value}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              ratio.status === 'excellent' ? 'bg-green-500' :
                              ratio.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min((ratio.value / ratio.target) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span>Target: {ratio.target}%</span>
                          <span className={`font-medium ${
                            ratio.status === 'excellent' ? 'text-green-600' :
                            ratio.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {ratio.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : reportType === 'patterns' ? (
              <>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-orange-500" />
                  Spending Patterns
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={spendingPatterns}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="day" stroke="#64748B" />
                    <YAxis stroke="#64748B" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#F8FAFC',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="amount" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                  <p>• Highest spending on Saturdays (₹2,200)</p>
                  <p>• Lowest spending on Tuesdays (₹950)</p>
                  <p>• Weekend spending is 35% higher than weekdays</p>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <PieChart className="w-6 h-6 mr-2 text-purple-500" />
                  Expense Breakdown
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {categoryData.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-slate-900 dark:text-white">₹{item.value.toLocaleString()}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Predictive Analytics */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <TrendingRight className="w-6 h-6 mr-2 text-cyan-500" />
              Predictive Analytics
            </h3>
            <div className="space-y-4">
              {predictiveData.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">{item.month}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Predicted Income</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">₹{item.predicted.toLocaleString()}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{item.confidence}% confidence</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/10 rounded-lg">
              <p className="text-sm text-cyan-700 dark:text-cyan-300">
                <Zap className="w-4 h-4 inline mr-1" />
                AI predicts 15% income growth over next 6 months
              </p>
            </div>
          </div>

          {/* Budget vs Actual with Trends */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-orange-500" />
              Budget Performance
            </h3>
            <div className="space-y-4">
              {categoryData.slice(0, 5).map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                    <div className="text-right">
                      <span className="font-medium">₹{item.value}</span>
                      <span className="text-slate-500 dark:text-slate-400 ml-2">/ ₹{item.budget}</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.status === 'over' ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min((item.value / item.budget) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={`font-medium ${
                      item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.trend}
                    </span>
                    <span className={`px-2 py-1 rounded ${
                      item.status === 'over'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Recommendations */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
              Recommendations
            </h3>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-200 text-left">
                <div className="font-medium text-blue-800 dark:text-blue-300">Optimize Budget</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Reduce entertainment spending by 20%</div>
              </button>

              <button className="w-full p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors duration-200 text-left">
                <div className="font-medium text-green-800 dark:text-green-300">Increase Savings</div>
                <div className="text-sm text-green-600 dark:text-green-400">Set up automatic transfers to savings</div>
              </button>

              <button className="w-full p-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors duration-200 text-left">
                <div className="font-medium text-purple-800 dark:text-purple-300">Investment Planning</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Consider diversifying your portfolio</div>
              </button>

              <button className="w-full p-3 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-lg transition-colors duration-200 text-left">
                <div className="font-medium text-orange-800 dark:text-orange-300">Emergency Fund</div>
                <div className="text-sm text-orange-600 dark:text-orange-400">Build 6 months of expenses coverage</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}