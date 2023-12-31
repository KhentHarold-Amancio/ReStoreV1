import styles from "./styles/Welcome.style";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter, useStack } from 'expo-router';

const Welcome = () =>{
const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.welcomePic} source={require("../../../assets/images/welcome/WelcomePic.png")} resizeMode="contain" />
                <Image style={styles.logo} source={require("../../../assets/images/welcome/icon2.png")} />
            </View>
            <Text style={styles.belowLogo}>Welcome to ReStore - Your Gateway to Data-Driven Success!</Text>
            <Text style={styles.smallText}>Let's embark on this journey to business excellence together!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.customButton} onPress={router.push('/overviews')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Welcome;