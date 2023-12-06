import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import styles from "../../components/commons/overviewcontainer/styles/OverView.style";
import { Stack, useRouter, useStack } from "expo-router";
import { COLORS } from "../../constants";
import { Icon } from "@ui-kitten/components";

const OverViewCard = () => {
  const understandButton = () => {
    router.replace("home");
  };
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const understood = false;

  const CheckIcon = (props): IconElement => (
    <Icon
      {...props}
      name="checkmark-square-2"
      style={{
        width: 30,
        height: 30,
        tintColor: COLORS.white,
        backgroundColor: 'transparent',
      }}
      fill= {checked ? COLORS.primary : COLORS.white}
      onPress={() => [setChecked((prevChecked) => !prevChecked), toggleTermsAgreement()]}
    />
  );


  const toggleTermsAgreement = () => {
    setTermsAgreed(!termsAgreed);
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <SafeAreaView style={styles.container}>
        <View style={{marginTop:50}}>
        <Text style={styles.headerText}>Overview</Text>
        <View style={styles.squareShapeView}>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.textShape}>
              Please read these terms carefully before connecting to the
              database. By using our services, you agree to be bound by these
              terms.
            </Text>
            {/* Add more Text components as needed */}
            <Text style={styles.textShape2}>1. Acceptance of Terms</Text>
            <Text style={styles.textShape3}>
              By connecting to the database via this app, you agree to comply
              with and be bound by these terms of use. If you do not agree with
              any part of these terms, please do not proceed to connect to the
              database.
            </Text>
            <Text style={styles.textShape2}>2. Data Usage</Text>
            <Text style={styles.textShape3}>
              • You are responsible for the data imported or accessed through
              this app.
              {"\n"}• You agree to comply with all relevant data protection and
              privacy laws.
            </Text>
            <Text style={styles.textShape2}>3. Security</Text>
            <Text style={styles.textShape3}>
              • You are responsible for safeguarding your login credentials.
              {"\n"}• Any unauthorized access to the database will be considered
              a breach of these terms.
            </Text>
            <Text style={styles.textShape}>
              By proceeding to connect to the database, you acknowledge your
              understanding of and agreement to these terms. Please review them
              carefully and contact us if you have any questions or concerns
              before using our services.
            </Text>
          </ScrollView>
        </View>
        <View style={[styles.checkboxContainer]}>
          <Text style={styles.term}>
            I agree with the Terms of use and Privacy policy.
          </Text>

            <TouchableOpacity onPress={toggleTermsAgreement}>
              <CheckIcon />
            </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={!termsAgreed}
          onPress={understandButton}
          style={[styles.buttonShape, { backgroundColor: termsAgreed ? COLORS.primary : COLORS.gray },]}>
          <Text style={styles.buttonStyle}>I understand</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OverViewCard;
