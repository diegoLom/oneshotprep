import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import PreferencesForm from './components/PreferencesForm';
import UserList from './components/UserList';
import PreferencesList from './components/PreferencesList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li>
              <Link className="nav-link" to="/preferences">Preferences</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={
            <div>
              <UserForm />
              <UserList />
            </div>
          } />
          <Route path="/preferences" element={
            <div>
              <PreferencesForm />
              <PreferencesList />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;