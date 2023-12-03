import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../constants";

const CustomDivider = ({ dividerColor }) => {
  return <Divider style={[styles.dividerStyle, { backgroundColor: dividerColor }]} />;
};

const styles = StyleSheet.create({
  dividerStyle: {
    height: 2,
    width: SIZES.cardWidth,
  },
});

export default CustomDivider;
