import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { COLORS, FONT, SIZES } from '../../../constants';
import { Stack, useRouter } from 'expo-router';
import { Card } from 'react-native-paper';
import { Icon } from "@ui-kitten/components";
import styles from '../../../components/commons/overviewcontainer/styles/OverView.style';

const BackIcon = (props): IconElement => (
  <Icon {...props} name="arrow-ios-back" />
);

const PolicyScreen = () => {
  const router = useRouter();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerTitle: "Policy",
          headerTitleAlign: "center",
          headerTitleStyle: {
            marginTop: 10,
            fontFamily: FONT.medium,
            color: COLORS.white,
            fontSize: SIZES.xLarge,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 6,
                marginLeft: -10,
              }}
              onPress={() => router.back()}>
              <BackIcon fill={COLORS.white} width={35} height={35} />
              <Text
                style={{
                  fontFamily: FONT.regular,
                  color: COLORS.white,
                  fontSize: SIZES.large,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
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
        </View>
    </SafeAreaView>
  );
};




export default PolicyScreen