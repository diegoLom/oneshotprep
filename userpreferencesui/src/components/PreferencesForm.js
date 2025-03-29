import React, { useState } from 'react';
import { registerPreferences } from '../api';

const PreferencesForm = () => {
  const [preferences, setPreferences] = useState({ name: '', value: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerPreferences(preferences);
      alert('Preferences registered successfully');
      setPreferences({ name: '', value: '' });
    } catch (error) {
      console.error('Error registering preferences:', error);
      alert('Failed to register preferences');
    }
  };

  return (
    <div className="form-container">
      <h2>Register New Preference</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={preferences.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Value:</label>
          <input
            type="text"
            name="value"
            value={preferences.value}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">Register Preference</button>
      </form>
    </div>
  );
};

export default PreferencesForm;