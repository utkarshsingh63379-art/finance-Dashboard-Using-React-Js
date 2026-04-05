import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  User,
  Bell,
  Palette,
  Shield,
  Database,
  Download,
  Upload,
  Trash2,
  Moon,
  Sun,
  Monitor,
  Save,
  Eye,
  EyeOff,
  Mail,
  Smartphone,
  Globe,
  Lock,
  Key,
  CreditCard
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [theme, setTheme] = useState("system");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    budgetAlerts: true,
    weeklyReports: true,
    goalReminders: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "appearance", name: "Appearance", icon: Palette },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "security", name: "Security", icon: Shield },
    { id: "data", name: "Data & Privacy", icon: Database }
  ];

  const handleNotificationChange = (key, value) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const exportData = () => {
    alert("Data export initiated. You'll receive an email with your data shortly.");
  };

  const importData = () => {
    alert("Data import feature coming soon!");
  };

  const deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Account deletion initiated. You'll receive a confirmation email.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage your account preferences and application settings
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <tab.icon className="mr-3 h-5 w-5" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <User className="w-6 h-6 mr-3 text-blue-500" />
                    Profile Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="utkarsh"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="singh"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="utkarsh.singh@example.com"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+91 99999997"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        defaultValue="Personal finance enthusiast focused on building wealth and financial independence."
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === "appearance" && (
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <Palette className="w-6 h-6 mr-3 text-purple-500" />
                    Appearance
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Theme</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: "light", name: "Light", icon: Sun, desc: "Always use light mode" },
                          { id: "dark", name: "Dark", icon: Moon, desc: "Always use dark mode" },
                          { id: "system", name: "System", icon: Monitor, desc: "Follow system preference" }
                        ].map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setTheme(option.id)}
                            className={`p-4 border rounded-lg transition-all duration-200 ${
                              theme === option.id
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
                            }`}
                          >
                            <option.icon className="w-6 h-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                            <div className="font-medium text-slate-900 dark:text-white">{option.name}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{option.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Language</h3>
                      <select className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Currency</h3>
                      <select className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <Bell className="w-6 h-6 mr-3 text-orange-500" />
                    Notifications
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        {[
                          { key: "email", label: "Email notifications", desc: "Receive updates via email" },
                          { key: "budgetAlerts", label: "Budget alerts", desc: "Get notified when you exceed budget limits" },
                          { key: "weeklyReports", label: "Weekly reports", desc: "Receive weekly financial summaries" },
                          { key: "goalReminders", label: "Goal reminders", desc: "Reminders about your financial goals" }
                        ].map((item) => (
                          <div key={item.key} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                            <div className="flex items-center">
                              <Mail className="w-5 h-5 text-slate-400 mr-3" />
                              <div>
                                <div className="font-medium text-slate-900 dark:text-white">{item.label}</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</div>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications[item.key]}
                                onChange={(e) => handleNotificationChange(item.key, e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Push Notifications</h3>
                      <div className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                        <div className="flex items-center">
                          <Smartphone className="w-5 h-5 text-slate-400 mr-3" />
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">Push notifications</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Receive notifications on your device</div>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.push}
                            onChange={(e) => handleNotificationChange("push", !notifications.push)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-green-500" />
                    Security
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Current Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="w-full px-3 py-2 pr-10 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4 text-slate-400" />
                              ) : (
                                <Eye className="w-4 h-4 text-slate-400" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center">
                          <Key className="w-4 h-4 mr-2" />
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Two-Factor Authentication</h3>
                      <div className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">Enable 2FA</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Add an extra layer of security to your account</div>
                          </div>
                          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200">
                            Enable
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Data & Privacy Settings */}
              {activeTab === "data" && (
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                    <Database className="w-6 h-6 mr-3 text-indigo-500" />
                    Data & Privacy
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Data Export</h3>
                      <div className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">Export Your Data</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Download all your financial data in JSON format</div>
                          </div>
                          <button
                            onClick={exportData}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Data Import</h3>
                      <div className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">Import Data</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Import financial data from other applications</div>
                          </div>
                          <button
                            onClick={importData}
                            className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 flex items-center"
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Import
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Danger Zone</h3>
                      <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-red-900 dark:text-red-400">Delete Account</div>
                            <div className="text-sm text-red-700 dark:text-red-300">Permanently delete your account and all associated data</div>
                          </div>
                          <button
                            onClick={deleteAccount}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 flex items-center"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}