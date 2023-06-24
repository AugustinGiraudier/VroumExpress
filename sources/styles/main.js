import { StyleSheet } from 'react-native';
//import { useTheme } from '@react-navigation/native';

//const { colors } = useTheme();

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FE5F00",
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        padding:10
    },
    container: {
        flex: 0,
        width: "100%",
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        padding:10,
        borderRadius:10,
        marginTop:2
    },
    lightContainer:{
        flex: 0,
        width: "100%",
        backgroundColor: "#F5F5F5",
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        padding:15,
        borderRadius:10,
        marginVertical:3
    },
    semiLightContainer:{
        width:"48%",
        marginHorizontal:"1%",
        alignItems: "center",
        paddingVertical:3,
        paddingHorizontal:0
    },
    carImage:{
        width: undefined,
        height: 80,
        aspectRatio:3/2
    },
    bigCarImage:{
        width: "100%",
        height: undefined,
        aspectRatio:3/2,
        marginVertical:10
    },
    pressable:{
        width:"100%",
        height:40,
        borderRadius : 8,
        backgroundColor: "white",
        marginTop:30,
        alignItems:"center",
        justifyContent:"center",
    },
    hStack: {
        flex: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection:"row"
    },
    title: {
        fontSize: 15,
        color: "black",
        fontWeight:"bold"
    },
    textSecondary:{
        color:"#C0C0C0",
        fontSize: 11
    },
    text:{
        color: "#F5F5F5"
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal:10,
        marginTop:2
      },
  });

export default styles;