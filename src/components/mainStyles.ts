import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#004643',
        alignItems: 'center',
    },
    spinner:{
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"110%",
        zIndex:100,
        backgroundColor: "hsla(360, 100%, 100%, 0.1)",
    }
});