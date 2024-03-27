import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';


export interface PostData {
  name: string;
  model: string;
  color: string;
}

export function PeticionPost(): React.ReactElement {
  const [postData, setPostData] = useState<PostData>({
    name: '',
    model: '',
    color: '',
  });

  const handlePress = async () => {
    console.log('hizo click para enviar POST');
    try {
      const response = await axios.post('http://10.0.2.2:3000/users', postData);
      // console.log('Respuesta del servidor:', response.data);
      console.log('Respuesta del servidor:', postData);
      // Aquí puedes manejar la respuesta del servidor según tus necesidades
    } catch (error) {
      console.error('Error al enviar POST:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostData({ ...postData, name: text })}
        value={postData.name}
      />
      <Text style={styles.text}>Model:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostData({ ...postData, model: text })}
        value={postData.model}
      />

      <Text style={styles.text}>Color:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostData({ ...postData, color: text })}
        value={postData.color}
      />
      <Button title="Enviar POST" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

/*

uno@hotmail.com

*/