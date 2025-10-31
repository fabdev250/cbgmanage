import React, { useState } from 'react';
import { 
  Settings, Save, Bell, Shield, Database, Users, Building2, 
  BookOpen, CreditCard, Globe, Mail, Lock, Monitor, Wifi,
  ChevronRight, Check, X, Edit3, Trash2, Plus
} from 'lucide-react';

const Configuration = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    general: {
      schoolName: 'Boarding School Management System',
      schoolCode: 'BSM2024',
      academicYear: '2024-2025',
      timezone: 'Africa/Kigali',
      language: 'English',
      dateFormat: 'DD/MM/YYYY',
      currency: 'RWF'
    },
    
    // System Settings
    system: {
      autoBackup: true,
      backupFrequency: 'daily',
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      maintenanceMode: false
    },
    
    // Notification Settings
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      admissionAlerts: true,
      paymentReminders: true,
      attendanceAlerts: true,
      behaviorAlerts: true
    },
    
    // Academic Settings
    academic: {
      gradingSystem: 'percentage',
      passingGrade: 50,
      maxAbsenceDays: 15,
      term1Start: '2024-09-02',
      term1End: '2024-12-13',
      term2Start: '2025-01-06',
      term2End: '2025-04-04',
      term3Start: '2025-04-21',
      term3End: '2025-07-11'
    },
    
    // Fee Settings
    fees: {
      tuitionFee: 500000,
      boardingFee: 300000,
      registrationFee: 50000,
      latePaymentFee: 10000,
      dueDate: 5,
      gracePeriod: 7
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempSettings, setTempSettings] = useState(settings);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'system', label: 'System', icon: Monitor },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'academic', label: 'Academic', icon: BookOpen },
    { id: 'fees', label: 'Fees & Payments', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'backup', label: 'Backup & Restore', icon: Database }
  ];

  const handleSave = () => {
    setSettings(tempSettings);
    setIsEditing(false);
    // Here you would typically send the settings to your backend
    alert('Settings saved successfully!');
  };

  const handleCancel = () => {
    setTempSettings(settings);
    setIsEditing(false);
  };

  const handleInputChange = (section, field, value) => {
    setTempSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleToggle = (section, field) => {
    setTempSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field]
      }
    }));
  };

  const SettingSection = ({ title, icon: Icon, children }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  const SettingField = ({ label, description, children }) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex-1 mb-3 sm:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
      <div className="w-full sm:w-64">
        {children}
      </div>
    </div>
  );

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <SettingSection title="School Information" icon={Building2}>
        <div className="space-y-1">
          <SettingField label="School Name" description="The official name of your institution">
            <input
              type="text"
              value={tempSettings.general.schoolName}
              onChange={(e) => handleInputChange('general', 'schoolName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </SettingField>

          <SettingField label="School Code" description="Unique identifier for your school">
            <input
              type="text"
              value={tempSettings.general.schoolCode}
              onChange={(e) => handleInputChange('general', 'schoolCode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </SettingField>

          <SettingField label="Academic Year" description="Current academic year">
            <input
              type="text"
              value={tempSettings.general.academicYear}
              onChange={(e) => handleInputChange('general', 'academicYear', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </SettingField>
        </div>
      </SettingSection>

      <SettingSection title="Regional Settings" icon={Globe}>
        <div className="space-y-1">
          <SettingField label="Timezone" description="Default timezone for the system">
            <select
              value={tempSettings.general.timezone}
              onChange={(e) => handleInputChange('general', 'timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            >
              <option value="Africa/Kigali">East Africa Time (Kigali)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time</option>
            </select>
          </SettingField>

          <SettingField label="Language" description="Default system language">
            <select
              value={tempSettings.general.language}
              onChange={(e) => handleInputChange('general', 'language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Kinyarwanda">Kinyarwanda</option>
            </select>
          </SettingField>

          <SettingField label="Date Format" description="How dates are displayed">
            <select
              value={tempSettings.general.dateFormat}
              onChange={(e) => handleInputChange('general', 'dateFormat', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            >
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </SettingField>

          <SettingField label="Currency" description="Default currency for fees and payments">
            <select
              value={tempSettings.general.currency}
              onChange={(e) => handleInputChange('general', 'currency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            >
              <option value="RWF">RWF - Rwandan Franc</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
            </select>
          </SettingField>
        </div>
      </SettingSection>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <SettingSection title="System Preferences" icon={Monitor}>
        <div className="space-y-1">
          <SettingField 
            label="Automatic Backups" 
            description="Automatically backup system data"
          >
            <button
              onClick={() => handleToggle('system', 'autoBackup')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.system.autoBackup ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.system.autoBackup ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>

          <SettingField label="Backup Frequency" description="How often to create backups">
            <select
              value={tempSettings.system.backupFrequency}
              onChange={(e) => handleInputChange('system', 'backupFrequency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </SettingField>

          <SettingField label="Session Timeout" description="Minutes before automatic logout">
            <input
              type="number"
              min="5"
              max="120"
              value={tempSettings.system.sessionTimeout}
              onChange={(e) => handleInputChange('system', 'sessionTimeout', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </SettingField>

          <SettingField label="Max Login Attempts" description="Failed attempts before lockout">
            <input
              type="number"
              min="3"
              max="10"
              value={tempSettings.system.maxLoginAttempts}
              onChange={(e) => handleInputChange('system', 'maxLoginAttempts', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
          </SettingField>
        </div>
      </SettingSection>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <SettingSection title="Notification Channels" icon={Bell}>
        <div className="space-y-1">
          <SettingField 
            label="Email Notifications" 
            description="Send notifications via email"
          >
            <button
              onClick={() => handleToggle('notifications', 'emailNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.notifications.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>

          <SettingField 
            label="SMS Notifications" 
            description="Send notifications via SMS"
          >
            <button
              onClick={() => handleToggle('notifications', 'smsNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.notifications.smsNotifications ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.notifications.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>

          <SettingField 
            label="Push Notifications" 
            description="Show in-app notifications"
          >
            <button
              onClick={() => handleToggle('notifications', 'pushNotifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.notifications.pushNotifications ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.notifications.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>
        </div>
      </SettingSection>

      <SettingSection title="Notification Types" icon={Mail}>
        <div className="space-y-1">
          <SettingField 
            label="New Admission Alerts" 
            description="Notify when new students are admitted"
          >
            <button
              onClick={() => handleToggle('notifications', 'admissionAlerts')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.notifications.admissionAlerts ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.notifications.admissionAlerts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>

          <SettingField 
            label="Payment Reminders" 
            description="Send fee payment reminders"
          >
            <button
              onClick={() => handleToggle('notifications', 'paymentReminders')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.notifications.paymentReminders ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.notifications.paymentReminders ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>

          <SettingField 
            label="Attendance Alerts" 
            description="Notify about student attendance"
          >
            <button
              onClick={() => handleToggle('notifications', 'attendanceAlerts')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tempSettings.notifications.attendanceAlerts ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              disabled={!isEditing}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tempSettings.notifications.attendanceAlerts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </SettingField>
        </div>
      </SettingSection>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings();
      case 'system':
        return renderSystemSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'academic':
        return <div className="text-center py-12 text-gray-500">Academic settings coming soon...</div>;
      case 'fees':
        return <div className="text-center py-12 text-gray-500">Fee settings coming soon...</div>;
      case 'security':
        return <div className="text-center py-12 text-gray-500">Security settings coming soon...</div>;
      case 'backup':
        return <div className="text-center py-12 text-gray-500">Backup settings coming soon...</div>;
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">System Configuration</h1>
            <p className="text-gray-600">Manage your school's system settings and preferences</p>
          </div>
          
          <div className="flex space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Settings</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <nav className="p-4">
              <ul className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition duration-200 ${
                          activeTab === tab.id
                            ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{tab.label}</span>
                        </div>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm text-green-600">Today, 02:00 AM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">System Version</span>
                <span className="text-sm text-gray-800">v1.0.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database Size</span>
                <span className="text-sm text-gray-800">45.2 MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Configuration;