import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserCard from './UserCard';
import AddUserForm from './AddUserForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => setError(error));
  }, []);

  const addUser = (user) => {
    setUsers([user, ...users]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h1>User List</h1>
      <AddUserForm addUser={addUser} />
      <UserList>
        {users.map(user => (
          <UserCard key={user.id} user={user} deleteUser={deleteUser} />
        ))}
      </UserList>
    </Container>
  );
};

export default App;
