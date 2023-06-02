import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainColor:{
        color : "#FE5F00"
    },
    container: {
        flex: 1,
        backgroundColor: "#FE5F00",
        alignItems: "center",
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color:"white"
    },
    text:{
        color:"white"
    },
    input: {
        width: '50%',
        borderColor: 'lightgray',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
      },
  });

export default styles;