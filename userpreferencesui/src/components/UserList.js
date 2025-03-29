import React, { useState, useEffect } from 'react';
import { getUsers } from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        
        // Ensure we're getting an array
        if (!Array.isArray(response)) {
          throw new Error('Invalid response format');
        }
        
        setUsers(response);
        setError(null);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(error.message);
        setUsers([]); // Ensure we have an empty array
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="list-container">Loading users...</div>;
  }

  if (error) {
    return <div className="list-container">Error: {error}</div>;
  }

  return (
    <div className="list-container">
      <h2 className="list-header">Registered Users</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map(user => (
          <div key={user.id} className="list-item">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;