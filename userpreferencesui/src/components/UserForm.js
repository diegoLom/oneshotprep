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
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={user.age} onChange={handleChange} required />
            </div>
            <button type="submit">Register User</button>
        </form>
    );
};

export default UserForm;