import { Text, View } from "react-native";
import { Botoon } from "../components/Button";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/main";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesHome } from "../styles/Home";



type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation} : HomeProps) => {
    const handlePress = () => {
        console.log('ABRIR CAMARA');
        navigation.navigate('QR');
    };
    
    const handlePress2 = () => {
        // navigation.navigate('UsersList')
        navigation.navigate('ModifyUsers')
      }

    return (
        <SafeAreaView style={stylesHome.container}>
        <View style={stylesHome.sectionContainer}>

            <Botoon onPress={handlePress}
            title="Abrir Cámara" 
            styleButton={stylesHome.button} 
            styleText={stylesHome.buttonText}
            />
            <Text></Text>

            <Botoon onPress={handlePress2}
            title="Lista Usuarios"
            styleButton={stylesHome.btnList}
            styleText={stylesHome.btnListText}
            />

        </View>
        </SafeAreaView>
    );
};