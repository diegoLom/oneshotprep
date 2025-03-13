import React from 'react';
import UserForm from './components/UserForm';
import PreferencesForm from './components/PreferencesForm';

const App = () => {
    return (
        <div>
            <h1>User Preference App</h1>
            <UserForm />
            <PreferencesForm />
        </div>
    );
};

export default App;