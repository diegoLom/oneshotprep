import React, { useState, useEffect } from 'react';
import { getPreferences } from '../api';

const PreferencesList = () => {
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const data = await getPreferences();
        setPreferences(data);
      } catch (error) {
        console.error('Error fetching preferences:', error);
      }
    };
    fetchPreferences();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-header">Registered Preferences</h2>
      {preferences.map(pref => (
        <div key={pref.id} className="list-item">
          <p><strong>Name:</strong> {pref.name}</p>
          <p><strong>Value:</strong> {pref.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PreferencesList;