import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Button = styled.button`
  background-color: #ff5c5c;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ff1f1f;
  }
`;

const UserCard = ({ user, deleteUser }) => {
  return (
    <Card>
      <img src={`https://robohash.org/${user.id}?size=100x100`} alt={`${user.name}`} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <Button onClick={() => deleteUser(user.id)}>Удалить</Button>
    </Card>
  );
};

export default UserCard;
