import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F4F3F3",
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    container: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDefault: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: "#399fff",
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    buttonVoltarDefault: {
        width: '100%',
        backgroundColor: "#399fff",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonTextDefault: {
        color: "#FFF",
        fontSize: 17
    }
})

export default styles