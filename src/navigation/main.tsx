

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { QR } from "../screens/QR";
import { Form, objetito } from "../screens/Form";
import { UsersList } from "../screens/UserList";
import { TodoPet } from "../screens/pantallitas/todoPet";
import { UpdPet } from "../screens/pantallitas/updPet";


export type RootStackParamList = {
    Home: undefined;
    QR: undefined;
    Form: {
            nombre: string,
            modelo: string,
            color: string
        };
    UsersList: undefined;
    TodoPet: objetito;
    UpdPet: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="QR" component={QR} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="UsersList" component={UsersList} />
            <Stack.Screen name="TodoPet" component={TodoPet} />
            <Stack.Screen name="UpdPet" component={UpdPet} />
        </Stack.Navigator>
    )
}


