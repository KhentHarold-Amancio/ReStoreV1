import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { width } = Dimensions.get("window");
const buttonWidth = width * 0.95;

const ImportButton = () => {
  const Import = () => {
    // You can add more logic or actions here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Import}>
        <Text style={styles.textProperty}>Import File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImportButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 56,
    width: buttonWidth,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
  },
  textProperty: {
    fontSize: SIZES.smallmedium,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
});
