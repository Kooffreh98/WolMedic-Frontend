"use client";

import { useState } from "react";
import BaseLayout from "components/BaseLayout"; // Ensure this path matches your folder structure

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Ella Barris",
    email: "ella.barris@example.com",
    phone: "+1234567890",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const togglePreference = (key: "notifications" | "darkMode") => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <BaseLayout>
      <div className="flex flex-col min-h-screen bg-gray-50 p-8 space-y-10">
        {/* Header */}
        <header>
          <h3 className="text-2xl font-semibold text-gray-800">Settings</h3>
          <p className="text-sm text-gray-500">
            Manage your account settings and preferences.
          </p>
        </header>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-xl p-8 flex-1">
          {/* Profile Settings */}
          <section className="mb-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Profile Settings
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="mb-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Preferences
            </h4>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">
                Email Notifications
              </span>
              <button
                onClick={() => togglePreference("notifications")}
                className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors ${
                  preferences.notifications ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`h-4 w-4 bg-white rounded-full shadow-md transform transition ${
                    preferences.notifications ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">
                Dark Mode
              </span>
              <button
                onClick={() => togglePreference("darkMode")}
                className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors ${
                  preferences.darkMode ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`h-4 w-4 bg-white rounded-full shadow-md transform transition ${
                    preferences.darkMode ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </section>

          {/* Save Changes Button */}
          <div className="flex justify-end">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Settings;
