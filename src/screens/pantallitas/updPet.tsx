import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/main';

export type UpdPetProps = NativeStackScreenProps<RootStackParamList, 'UpdPet'>



interface PostDataU {
  name: string;
  model: string;
  color: string;
  // _id: string;

}

  export function UpdPet(yuseraidi: any): React.ReactElement {
  const [postDataU, setPostDataU] = useState<PostDataU>({
    name: '',
    model: '',
    color: '',
  });
  const [loading, setLoading] = useState<boolean>(false);


    const handlePressUpdPet = async () => {
        setLoading(true);
        try {
        await axios.delete(`http://10.0.2.2:3000/users/${yuseraidi}`, );
        console.log('Usuario eliminado con éxito:', yuseraidi);
        } catch (error) {
        console.error('Error deleting user:', error);
        } finally {
        setLoading(false);
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostDataU({ ...postDataU, name: text })}
        value={postDataU.name}
      />
      <Text style={styles.text}>Model:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostDataU({ ...postDataU, model: text })}
        value={postDataU.model}
      />

      <Text style={styles.text}>Color:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPostDataU({ ...postDataU, color: text })}
        value={postDataU.color}
      />
      <Button title="Enviar POST" onPress={handlePressUpdPet} />
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