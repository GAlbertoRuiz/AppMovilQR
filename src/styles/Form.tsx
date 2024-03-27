import { StyleSheet } from "react-native";


export const styleForm = StyleSheet.create({
    container: {
      flex:1,
      margin: 'auto',
      padding: 15,
      paddingTop:20,
    },
    titulo: {
      textAlign: 'center',
      fontSize: 25,
      marginBottom: 15
    },
    input: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'green',
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold'
    },
    titu: {
      fontSize:20,
      fontWeight:  'bold'
    },
    obli: {
      color: 'red'
    },
    errorMessage: {
      display: 'none',
    // color: 'red',
    fontSize: 14,
    },
    cuadro: {
    marginBottom: 10
    },

    btnSend: {
      backgroundColor: 'blue',
      padding:'auto',
      borderRadius: 5,
      margin: 'auto',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2
    },
    btnSendText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },

});