import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/main";
import { Text } from "react-native";
import { GetAllUsers } from "../api/AsyncStorage/GetAllUsers";



type UserListProps = NativeStackScreenProps<RootStackParamList, 'UsersList'>;

export const UsersList = () => {
    return (
        <>
            <GetAllUsers />
        </>
    )
}