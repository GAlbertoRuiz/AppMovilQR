import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/main";
import { Camera, Code, CodeScannerFrame, Point, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";
import { useEffect } from "react";
import { stylesQR } from "../styles/QR";





type QRProps = NativeStackScreenProps<RootStackParamList, 'QR'>;

export const QR = ({navigation} : QRProps) => {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device = useCameraDevice('back')
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: any) => {
      // console.log(`Scanned ${codes} codes!`) 
      
      try {
      // const usu = JSON.parse(codes[0]?.value)
      for (let index = 0; index < 1; index++) {
        const x = codes[0]?.value;
        const usu = JSON.parse(x)
        console.log('USUARIO DETECTADO',usu);
        console.log('ABRIENDO FORMULARIO');
        if (typeof usu === 'object' && usu !== null) {
          navigation.navigate('Form', {
          nombre: usu.nombre || '',
          modelo: usu.modelo || '',
          color: usu.color || '',
        });
        console.log('ENVIANDO URUARIO DESDE QR.tsx');
        } else {
        console.log('Formato de datos no reconocido:', usu);
        }
      }
      } catch (error : any) {
      console.log('Error al analizar el JSON del código QR:', error.name);
      }
  
    }
  });


    useEffect(() => {
        requestPermission();
    }, []);

    if (device == null) {
        return ( 
        <View>
            <Text> Device not fund </Text>
        </View>
        );
    }
  



    return (
      <Camera
        style={StyleSheet.absoluteFillObject}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
    );
};




