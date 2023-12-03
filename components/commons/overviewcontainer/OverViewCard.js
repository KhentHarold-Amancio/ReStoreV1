import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,Linking } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles/OverView.style";


    const OverViewCard = () => {
      const [termsAgreed, setTermsAgreed] = useState(false);
      const navigation = useNavigation();

    const toggleTermsAgreement = () => {
        setTermsAgreed(!termsAgreed);
    };
    const handleGetStarted = () => {
      if (termsAgreed) {
        navigation.navigate('Home');
      }
    };
        return (
            <SafeAreaView style={styles.container}>
              <Text style={styles.headerText}>Overview</Text>
              <View style={styles.squareShapeView}>
                <ScrollView style={styles.scrollContainer}>
                  <Text style={styles.textShape}>
                    Please read these terms carefully before connecting to the database. By using our services, you agree to be bound by these terms.
                  </Text>
                  {/* Add more Text components as needed */}
                  <Text style={styles.textShape2}>1. Acceptance of Terms</Text>
                  <Text style={styles.textShape3}>By connecting to the database via this app, you agree to comply with and be bound by these terms of use. If you do not agree with any part of these terms, please do not proceed to connect to the database.</Text>
                  <Text style={styles.textShape2}>2. Data Usage</Text>
                  <Text style={styles.textShape3}>
                    • You are responsible for the data imported or accessed through this app.
                    {'\n'}• You agree to comply with all relevant data protection and privacy laws.
                  </Text>
                  <Text style={styles.textShape2}>3. Security</Text>
                  <Text style={styles.textShape3}>
                    • You are responsible for safeguarding your login credentials.
                    {'\n'}• Any unauthorized access to the database will be considered a breach of these terms.
                  </Text>
                  <Text style={styles.textShape}>
                    By proceeding to connect to the database, you acknowledge your understanding of and agreement to these terms. Please review them carefully and contact us if you have any questions or concerns before using our services.
                  </Text>
                </ScrollView>
              </View>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={toggleTermsAgreement}>
                  <View style={styles.checkbox}>
                    {termsAgreed ? <Text>X</Text> : null}
                  </View>
                </TouchableOpacity>
                <Text style={styles.term}>I agree with the Terms of use and Privacy policy.</Text>
              </View>
              <TouchableOpacity
                style={[styles.buttonShape, termsAgreed ? {} : styles.disabledButton]}
                disabled={!termsAgreed} onPress={handleGetStarted}>
                <Text style={styles.buttonStyle}>Import File</Text>
              </TouchableOpacity>
            </SafeAreaView>
        );
    };
    
    
    export default OverViewCard;