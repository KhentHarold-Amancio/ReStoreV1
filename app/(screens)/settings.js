import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Pressable,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import React from "react";

import { useState, useFonts } from "react";

import { COLORS, images, FONT, SIZES } from "../../constants";

import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImportButton from "../../components/Settings/Buttons/ImportButton";

function MyCheckbox() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[style.checkboxBase, checked && style.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Ionicons name="checkmark" size={24} color={COLORS.gray} />}
    </Pressable>
  );
}

const SettingsView = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const darkModeOnpress = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray, height: "100%" }}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <HeaderLogo logoUrl={images.logo} />
            </View>
          ),
          headerTitle: <HeaderText headerTitle="Home" />,
          headerTitleStyle: {
            marginTop: 10,
            fontSize: 40,
            fontFamily: FONT.bold,
            color: COLORS.white,
          },
        }}
      />
      {/* Below is where you will add your components */}
      <View style={styles.maincont}>
        <View style={styles.subcont}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/images/settings/stats.png")}
              style={styles.img}
            />
            <Text style={styles.txt}>Statistics</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 338,
            height: 2,
            backgroundColor: COLORS.gray2,
            marginLeft: 20,
            marginTop: 20,
          }}
        />

        <View style={styles.subcont}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/images/settings/faq.png")}
              style={styles.img}
            />
            <Text style={styles.txt}>FAQ's</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subcont}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/images/settings/help.png")}
              style={styles.img}
            />
            <Text style={styles.txt}>Help</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 338,
            height: 2,
            backgroundColor: COLORS.gray2,
            marginLeft: 20,
            marginTop: 20,
          }}
        />

        <View style={styles.subcont}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
            }}
            href="./about"
          >
            <Image
              source={require("../../assets/images/settings/about.png")}
              style={styles.img}
            />
            <Text style={styles.txt}>About</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 338,
            height: 2,
            backgroundColor: COLORS.gray2,
            marginLeft: 20,
            marginTop: 20,
          }}
        />

        <View
          style={{
            width: SIZES.size,
            height: 2,
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 170,
          }}
        />
      </View>
      <ImportButton />
      {/*End*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincont: {
    flexDirection: "column",
    justifyContent: "center",
    width: SIZES.width,
    marginTop: 20,
  },
  subcont: {
    flexDirection: "row",
    marginLeft: 40,
    marginRight: 50,
    marginTop: 20,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 40,
    marginTop: 8,
  },
  headerRightContainer: {
    flexDirection: "row",
    marginRight: 10,
    marginTop: 15,
  },
  txt: {
    fontFamily: FONT.bold,
    fontSize: 35,
    color: COLORS.white,
  },
});

export default SettingsView;
