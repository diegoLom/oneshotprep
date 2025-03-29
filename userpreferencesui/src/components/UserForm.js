import React, { useState } from 'react';
import { registerUser } from '../api';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(user);
      alert('User registered successfully');
      setUser({ name: '', email: '', age: '' });
    } catch (error) {
        debugger;
      console.error('Error registering user:', error);
      alert('Failed to register user');
    }
  };

  return (
    <div className="form-container">
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Age:</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">Register User</button>
      </form>
    </div>
  );
};

export default UserForm;