// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import axios from 'axios';
// import { todoPetProps } from './todoPet';



// export interface Person {
//   name: string;
//   model: string;
//   color: string;
//   _id: string;
// }
  
// export function DelUpd({navigation, route}: todoPetProps, yuser: any): React.JSX.Element {

//   const [users, setUsers] = useState<Person[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handlePressGet = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://10.0.2.2:3000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//     const handlePressDelete = async (userId: string) => {
//         setLoading(true);
//         try {
//         await axios.delete(`http://10.0.2.2:3000/users/${userId}`);
//         console.log('Usuario eliminado con éxito:', userId);
//         // Actualizar la lista de usuarios después de la eliminación
//         handlePressGet();
//         } catch (error) {
//         console.error('Error deleting user:', error);
//         } finally {
//         setLoading(false);
//         }
//     }

//     const handlePressUpdate = (userId: string, yuser:any) => {
//         navigation.navigate('UpdPet', {userId, yuser} )
//   }



//   return (
//     <View style={styles.container}>
//       <Button title="Get All" onPress={handlePressGet} />
//       {users.length > 0 ? (
//         users.map((data, index) => (
//           <View key={index} style={styles.listItem}> 
//             <Button title= {"• " +  JSON.stringify(data.name)} onPress={() => console.log('equis')} />
//             <View style={{ width: 30 }} />
//             <Button title= 'Del' onPress={() => handlePressDelete(data._id)} />
//             <View style={{ width: 10 }} />
//             {/* <Button title= 'Upd' onPress={() => handlePressUpdate()} /> */}
//           </View>
//         ))
//       ) : (
//         <Text>...</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
// });
