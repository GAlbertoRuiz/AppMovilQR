import { Controller, useForm, useController } from "react-hook-form";
import { Text, TextInput, View, StyleSheet, TouchableOpacityProps} from "react-native";
import { FormData } from "../screens/Form";


interface BotoonProps extends TouchableOpacityProps {
    nom: any;
    styleText: object;
    styleCuadro: object;
    route: string;
    styleInput: object;
}

export const Cuadro: React.FC<BotoonProps> = ({nom, route, styleCuadro, styleText, styleInput}) => {

    const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

    return(

        <View style={styleCuadro}>
            <Text style={styleText} >Nombre</Text>
            <Controller
            
            name={nom}
            control={control}
            // defaultValue={initialValues.nombrito}
            defaultValue={route}
            rules={{ required: 'este campo es obligatorio' }}
            render={({ field }) => (
                /*En términos generales, field es un objeto proporcionado por react-hook-form para 
                facilitar la integración de campos de entrada en el formulario y simplificar la 
                gestión del estado y eventos asociados a esos campos.*/
                <>
                <TextInput {...field} 
                placeholder='Nombre del usuario' 
                style={styleInput}
                // readOnly={true}
                />
                
                {/* <Text style={errors ? estilos.errorMessage : { display: 'none' }}>
                {errors.nombrito?.message}
                </Text> */}
                </>
            )}
            />
        </View>
    )
}