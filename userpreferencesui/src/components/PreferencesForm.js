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
        } catch (error) {
            console.error('Error registering preferences:', error);
            alert('Failed to register preferences');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={preferences.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Value:</label>
                <input type="text" name="value" value={preferences.value} onChange={handleChange} required />
            </div>
            <button type="submit">Register Preferences</button>
        </form>
    );
};

export default PreferencesForm;