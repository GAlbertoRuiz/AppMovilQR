import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Button } from 'react-native';

interface User {
  _id: number;
  name: string;
  model: string;
  color: string;
}

const API_URL = 'http://10.0.2.2:3000/users';

export const GetAllUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View>
      <Text>User List:</Text>
      {users.map((user) => (
        <Text key={user._id}>{user.name}</Text>
      ))}
    </View>
  );
};
