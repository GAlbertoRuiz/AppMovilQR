import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/main"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { useEffect, useState } from "react"
import { Cuadro } from "../components/TextInput"
import { Botoon } from "../components/Button"
import { styleForm } from "../styles/Form"

type FormProps = NativeStackScreenProps<RootStackParamList, 'Form'>

export interface objetito {
    name: string;
    model: string;
    color: string;
  };

//  export interface FormData {
//     nombrito: string;
//     modelito: string;
//     colorito: string;
//   };
  

  // var objetoPost: objetito = {
  //   name: '',
  //   model: '',
  //   color: '',
  // }



export const Form = ({navigation,route} : FormProps) => {

    // const [initialValues, setInitialValues] = useState({
    //     nombrito: '',
    //     modelito: '',
    //     colorito: '',
    //   });

      
    const [initialValues, setInitialValues] = useState<objetito>({
      name:'' ,
      model: '',
      color: '',
    });
    
      // useEffect(() => {
      //   // Código para inicializar valores aquí
      //   setInitialValues({
      //     nombrito: route.params.nombre || '',
      //     modelito: route.params.modelo || '',
      //     colorito: route.params.color || '',
      //   });
      //   console.log(route.params.nombre);    
      //   console.log(route.params.modelo);
      //   console.log(route.params.color);
        
      // // }, [route.params]);
      // }, []);


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

      const handlePress = () => {
        // PetPost(initialValues);
        console.log('POST INITIALVALUES',initialValues);
        
        navigation.navigate('TodoPet', initialValues )
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







                            