import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../../../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100,
        
    },
    logoContainer: {
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
    },
    customButton: {
        height: 60,
        backgroundColor: '#3463E1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: FONT.bold// Set the font weight to bold
    },
    logo: {
        marginBottom: 10,
    },
    welcomePic: {
        marginBottom: 40,
        width: 330,
        height: 350,
        resizeMode: 'contain',
    },
    belowLogo: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold', // Set the font weight to bold
        color: COLORS.white
    },
    smallText: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 12,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
});

export default styles;