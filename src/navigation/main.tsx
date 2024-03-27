

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { QR } from "../screens/QR";
import { Form, objetito } from "../screens/Form";
import { UsersList } from "../screens/UserList";
import { ModifyUsers } from "../screens/ModifyUsers";
// import { UpdPet, ide } from "../screens/pantallitas/updPet";
import { string } from "prop-types";
import { UpdateUsers } from "../screens/pantallitas/UpdateUser";


export type RootStackParamList = {
    Home: undefined;
    QR: undefined;
    Form: {
            nombre: string,
            modelo: string,
            color: string
        };
    UsersList: undefined;
    // TodoPet: objetito;
    ModifyUsers: undefined;
    UpdateUsers: {
        idUp: string;
    };
    // UpdPet: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="QR" component={QR} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="UsersList" component={UsersList} />
            <Stack.Screen name="ModifyUsers" component={ModifyUsers} />
            <Stack.Screen name="UpdateUsers" component={UpdateUsers} />
        </Stack.Navigator>
    )
}


