import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/main"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { useEffect, useState } from "react"
import { Cuadro } from "../components/TextInput"
import { Botoon } from "../components/Button"
import { styleForm } from "../styles/Form"
import axios from "axios"

type FormProps = NativeStackScreenProps<RootStackParamList, 'Form'>

export interface objetito {
    name: string;
    model: string;
    color: string;
  };

export const Form = ({navigation,route} : FormProps) => {

      
    const [initialValues, setInitialValues] = useState<objetito>({
      name:'' ,
      model: '',
      color: '',
    });

      useEffect(() => {
        // Código para inicializar valores aquí
        setInitialValues({
          name: route.params.nombre || '',
          model: route.params.modelo || '',
          color: route.params.color || '',
        });
        // console.log(route.params.nombre);    
        // console.log(route.params.modelo);
        // console.log(route.params.color); 
        
        console.log('initialValues.name', route.params.nombre); 
        console.log('initialValues.model',route.params.modelo); 
        console.log('initialValues.color',route.params.color); 
        
      // }, [route.params]);
      }, []);

      const handlePress = async () => {
          // PetPost(initialValues);
              console.log('hizo click para enviar POST');
              try {
                const response = await axios.post('http://10.0.2.2:3000/users', initialValues);
                // console.log('Respuesta del servidor:', response.data);
                console.log('Respuesta del servidor:', initialValues);
                // Aquí puedes manejar la respuesta del servidor según tus necesidades
              } catch (error) {
                console.error('Error al enviar POST:', error);
              }
            

        console.log('POST INITIALVALUES',initialValues);
        
        // navigation.navigate('TodoPet', initialValues )
        navigation.popToTop();
      }


    return (
      <View style={styleForm.container}>
        <Text style={styleForm.titulo} > Control y monitoreo de unidades automóviles </Text>
        
        <Cuadro
        nom='nombrito'
        route={route.params.nombre}
        
        styleCuadro={styleForm.cuadro}
        styleText={styleForm.titu}
        styleInput={styleForm.input}
        
        />
        <Botoon
        onPress={handlePress}
        title="Registrar"
        styleButton={styleForm.btnSend}
        styleText={styleForm.btnSendText}
        />


        
        
      </View>
    )
};







                            