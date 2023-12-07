import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { COLORS, FONT, SIZES } from "../../constants";
import { Stack, useRouter } from "expo-router";
import { Card, Divider } from "react-native-paper";
import CustomDivider from "../../components/divider/customdivider";
import { Icon } from "@ui-kitten/components";

const BackIcon = (props): IconElement => (
  <Icon {...props} name="arrow-ios-back" />
);

const AboutScreen = () => {
  const router = useRouter();
  const handleBackPress = () => {
    navigation.goBack();
  };

  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setModalVisible(true);
    }, 3000);
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerTitle: "About",
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
              onPress={() => router.back()}
            >
              <BackIcon fill={COLORS.white} width={35} height={35} />
              <Text
                style={{
                  fontFamily: FONT.regular,
                  color: COLORS.white,
                  fontSize: SIZES.large,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Image source={require("../../assets/logo.png")} style={styles.img} />
      <View
        style={{
          width: SIZES.width * 0.9,
          alignContent: "center",
          marginHorizontal: 10,
        }}
      >
        <View style={styles.dividerStyle}>
          <CustomDivider dividerColor={COLORS.gray2} />
        </View>
      </View>
      {/* Below is where you will add your components */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Application is up-to-date. You're all set!
            </Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text>Ok, got it!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.version}>
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text style={styles.txt}>Version</Text>
          <Text style={styles.txt2}>STABLE 1.00.0 (12/06/23 11:12 PM)</Text>
        </View>
      </View>

      <View
        style={{
          width: SIZES.width * 0.9,
          alignContent: "center",
          marginHorizontal: 10,
        }}
      >
        <View style={styles.dividerStyle2}>
          <CustomDivider dividerColor={COLORS.gray2} />
        </View>
      </View>

      <View style={styles.version}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
          }}
          onPress={handlePress}
        >
          <Text style={styles.txt}>Check for updates</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.version}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
          }}
        >
          <Text style={styles.txt}>What’s new</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.version}>
        <TouchableOpacity
          style={{
            flexDirection: "column",
          }}
          onPress={() => router.push("/policy")}
        >
          <Text style={styles.txt}>Privacy policy</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="medium" color={COLORS.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //for modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.gray,
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: COLORS.white,
  },
  //end modal
  img: {
    alignSelf: "center",
    width: 150, // Set the desired width
    height: 150, // Set the desired height
  },
  dividerStyle: {
    justifyContent: "center",
    marginTop: 30,
  },
  dividerStyle2: {
    justifyContent: "center",
    marginTop: 20,
  },
  version: {
    flexDirection: "row",
    width: SIZES.cardHeight * 0.95,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    padding: 5,
  },
  txt: {
    marginTop: -10,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.white,
    width: SIZES.cardWidth,
  },
  txt2: {
    marginTop: -15,
    width: SIZES.cardWidth,
    color: COLORS.gray3,
    fontFamily: FONT.bold,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.gray,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AboutScreen;
