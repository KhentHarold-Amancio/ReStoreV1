import styles from "../../components/commons/welcome/styles/Welcome.style";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Stack, router, Redirect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = () => {
  const [hasLaunched, setHasLaunched] = useState(false);
  const HAS_LAUNCHED = "ReStore";
  useEffect(() => {
    getData().catch((error) => {
      console.log(error);
    });
    console.log("hasLaunched", hasLaunched);
  }, []);

  const getData = async () => {
    const value = await AsyncStorage.getItem(HAS_LAUNCHED);
    console.log("value", value);
    setHasLaunched(value);
    return value;
  };
  
  if (hasLaunched) {
    return <Redirect href="/home" />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.welcomePic}
            source={require("../../assets/images/welcome/WelcomePic.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require("../../assets/images/welcome/icon2.png")}
          />
        </View>
        <Text style={styles.belowLogo}>
          Welcome to ReStore - Your Gateway to Data-Driven Success!
        </Text>
        <Text style={styles.smallText}>
          Let's embark on this journey to business excellence together!
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => router.push("/overview")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};

export default Welcome;
