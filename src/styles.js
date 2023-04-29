import { StyleSheet } from "react-native";
import { COLORS } from './colors';

const styles = StyleSheet.create({
    input: {
        backgroundColor: COLORS.secondary,
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderColor: "#E0E0E0",
    },
    container: {
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDefault: {
        width: '90%',
        marginTop: '5%',
        backgroundColor: COLORS.primary,
        height: 42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    buttonVoltarDefault: {
        width: '100%',
        backgroundColor: COLORS.primary,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonTextDefault: {
        color: COLORS.white,
        fontSize: 17
    }
})

export default styles