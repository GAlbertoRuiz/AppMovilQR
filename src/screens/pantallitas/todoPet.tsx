import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/main";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, StyleSheet, Text, View} from "react-native";


export type todoPetProps = NativeStackScreenProps<RootStackParamList, 'TodoPet'>

interface PostData {
    name: string;
    model: string;
    color: string;
  }

  interface Person {
    name: string;
    model: string;
    color: string;
    _id: string;
  }
  

export const TodoPet = ({navigation,route} : todoPetProps) => {
    const [postData, setPostData] = useState<PostData>({
        name: route.params.name,
        model: route.params.model,
        color: route.params.color,
      });

    useEffect(() => {
      const sendPostData =  async () => {
        console.log('hizo click para enviar POST');
        try {
          const response = await axios.post('http://10.0.2.2:3000/users', postData);
          // console.log('Respuesta del servidor:', response.data);
          console.log('Respuesta del servidor con post:', postData);
          // Aquí puedes manejar la respuesta del servidor según tus necesidades
        } catch (error) {
          console.error('Error al enviar POST:', error);
        }
      };
      sendPostData();
    }, []);



    function DelUpd({navigation, route}: todoPetProps,) {

      const [users, setUsers] = useState<Person[]>([]);
      const [loading, setLoading] = useState<boolean>(false);
      
  // ------------ OBTENER -------------
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

    
    // --------ELIMINAR-------
        const handlePressDelete = async (userId: string) => {
            setLoading(true);
            try {
            await axios.delete(`http://10.0.2.2:3000/users/${userId}`);
            console.log('Usuario eliminado con éxito:', userId);
            // Actualizar la lista de usuarios después de la eliminación
            handlePressGet();
            } catch (error) {
            console.error('Error deleting user:', error);
            } finally {
            setLoading(false);
            }
        }
    
        const handlePressUpdate = (userId: string) => {
            navigation.navigate('UpdPet', userId )
      }
    


    return (
      <View style={styles.container}>
        <Button title="Get All" onPress={handlePressGet} />
        {users.length > 0 ? (
          users.map((data, index) => (
            <View key={index} style={styles.listItem}> 
              <Button title= {"• " +  JSON.stringify(data.name)} onPress={() => console.log('equis')} />
              <View style={{ width: 30 }} />
              <Button title= 'Del' onPress={() => handlePressDelete(data._id)} />
              <View style={{ width: 10 }} />
              <Button title= 'Upd' onPress={() => handlePressUpdate(data._id)} />
            </View>
          ))
        ) : (
          <Text>...</Text>
        )}
      </View>
        )};
        
};

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
      listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  });
  