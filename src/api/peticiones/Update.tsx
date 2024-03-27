import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

interface Person {
  name: string;
  model: string;
  color: string;
  _id: string;
}
  
export function Update(): React.JSX.Element {

  const [users, setUsers] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePressGet = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://10.0.2.2:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePressUpdate = async (userId: string) => {
    setLoading(true);
    try {
      // Aquí debes implementar la lógica de actualización según tu API
      // Por ejemplo:
      // const response = await axios.put(`http://10.0.2.2:3000/users/${userId}`, updatedUserData);
      console.log('Usuario actualizado con éxito:', userId);
      // Actualizar la lista de usuarios después de la actualización
      handlePressGet();
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Get All" onPress={handlePressGet} />
      {users.length > 0 ? (
        users.map((data, index) => (
          <View key={index} style={styles.listItem}> 
            <Button title= {"• " +  JSON.stringify(data.name)} onPress={() => console.log('equis')} />
            <View style={{ width: 30 }} />
            {/* <Button title= 'Del' onPress={() => console.log('Eliminado')} />
            <View style={{ width: 10 }} /> */}
            <Button title= 'Upd' onPress={() => handlePressUpdate(data._id)} />
          </View>
        ))
      ) : (
        <Text>...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
