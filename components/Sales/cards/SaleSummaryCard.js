import { View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/SaleSummary.style";
const SaleSummaryCard = () => {

  return (
    <TouchableOpacity>
    <Card style={styles.container}>
      <Card.Content contentStyle={styles.container}>
        <Text style={[styles.textStyle, {fontFamily: FONT.bold, fontSize: SIZES.medium}]}>Total sales</Text>
        <Text style={[styles.textStyle, {marginTop: 5, marginBottom: 10, fontFamily: FONT.medium, fontSize: SIZES.xLarge}]}>$27,XXX.XX</Text>
        <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.small}]}>Units sold: 5XX</Text>
      </Card.Content>
      <Image
        source={require("../../../assets/images/sales/sales-card-image.png")}
        style={styles.image}
      />
    </Card>
    </TouchableOpacity>
  );
};


export default SaleSummaryCard;
