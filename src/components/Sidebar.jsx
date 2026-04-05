import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Settings,
  Wallet,
  TrendingUp,
  PieChart,
  Target,
  Calendar,
  User,
  Bell,
  HelpCircle,
  LogOut
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Overview & Analytics"
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: Receipt,
    description: "Manage Transactions"
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
    description: "Financial Reports"
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    description: "App Preferences"
  }
];

const quickActions = [
  {
    name: "Budget Goals",
    icon: Target,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  },
  {
    name: "Categories",
    icon: PieChart,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    name: "Calendar",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20"
  }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Finance</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Personal Finance Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <h3 className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Navigation
          </h3>
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 transition-colors duration-200 ${
                      isActive
                        ? "text-blue-500"
                        : "text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-2">
          <h3 className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => (
              <button
                key={action.name}
                className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 ${action.bgColor} hover:shadow-md`}
              >
                <action.icon className={`w-5 h-5 mx-auto mb-1 ${action.color}`} />
                <div className="text-xs font-medium text-center text-slate-700 dark:text-slate-300">
                  {action.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="mt-8 p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/50 rounded-lg">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
            This Month
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Income</span>
              <span className="font-medium text-green-600">₹25,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Expenses</span>
              <span className="font-medium text-red-600">₹18,500</span>
            </div>
            <div className="flex justify-between text-sm border-t border-slate-200 dark:border-slate-600 pt-2">
              <span className="text-slate-600 dark:text-slate-400">Balance</span>
              <span className="font-semibold text-blue-600">₹6,500</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900 dark:text-white">John Doe</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Premium User</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
              <HelpCircle className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}