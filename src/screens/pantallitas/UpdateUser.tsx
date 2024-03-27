import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/main';

export type UpdPetProps = NativeStackScreenProps<RootStackParamList, 'UpdateUsers'>

export interface ide {
  userId: string;
}

interface PostDataU {
  name: string;
  model: string;
  color: string;
  // _id: string;

}

  export function UpdateUsers({navigation, route}: UpdPetProps): React.ReactElement {
  const [postDataU, setPostDataU] = useState<PostDataU>({
    name: '',
    model: '',
    color: '',
  });
  const [loading, setLoading] = useState<boolean>(false);


    const handlePressUpdPet = async () => {
      setLoading(true);
      try {
      await axios.put(`http://10.0.2.2:3000/users/${route.params.idUp}`, postDataU );
      console.log('Usuario actualizado con éxito:', route.params.idUp);
      } catch (error) {
      console.error('Error UpDate user:', error);
      } finally {
      setLoading(false);
      }
      
      navigation.goBack();
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