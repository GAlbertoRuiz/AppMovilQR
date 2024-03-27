
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';


 interface Person {
  name: string;
  model: string;
  color: string;
  _id: string;
  };


export function PetGet(): React.JSX.Element {

    const [users, setUsers] = useState<Person[]>([
    {
    name: '',
    model: '',
    color: '',
    _id: '',
   } 
  ]);


      const handlePress = async () => {
        console.log('hizo click');
        try {
          const response = await axios.get('http://10.0.2.2:3000/users');
          const PersonData: Person[] = response.data;
          setUsers(PersonData);
          console.log(PersonData);
          
        } catch (error) {
          console.error('Error fetching data:', error);
          };
      };

    return(
    <View style={styles.container}>
      <Button title="Get All" onPress={handlePress} />

      {users.length > 0 ? (
        users.map((data, index) => (

          <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.textL}>{data.name}</Text>
        </View>
        ))
      ) : (
        <Text>...</Text>
        )}
    </View>
    )
};

                            const styles = StyleSheet.create({
                                sectionContainer: {
                                  marginTop: 32,
                                  paddingHorizontal: 24,
                                },
                                centro: {
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                },
                                btnText: {
                                  fontSize: 20,
                                  fontWeight: 'bold'

                                },
                                cuadro: {
                                  borderWidth: 1,
                                  margin: 10,
                                  padding: 10,
                                  fontSize: 20,
                                  fontWeight: 'bold',
                                  color: 'black'
                                },


                                container: {
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                },
                                text: {
                                  fontSize: 20,
                            fontWeight: 'bold',
                            marginVertical: 5,
                            },
                            listContainer: {
                            marginTop: 10,
                            paddingHorizontal: 20,
                            },
                            listItem: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 5,
                            // marginTop: 15
                            },
                            bullet: {
                            fontSize: 20,
                            marginRight: 5,
                            },
                            textL: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            },
                            });