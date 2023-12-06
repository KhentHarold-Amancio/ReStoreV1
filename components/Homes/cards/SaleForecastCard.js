import { View, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/SaleForecast.style";

const SaleForecastCard = () => {

  return (
    <Card style={styles.container}>
      <Card.Content contentStyle={styles.container}>
        <Text style={[styles.textStyle, {fontFamily: FONT.bold, fontSize: SIZES.medium}]}>Forecast</Text>
        <Text style={[styles.textStyle, {marginTop: 5, marginBottom: 10, fontFamily: FONT.medium, fontSize: SIZES.xxLarge}]}>$27,XXX.XX</Text>
        <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.small}]}>Data as of XX-XX-XXXX</Text>
      </Card.Content>
      <Image
        source={require("../../../assets/images/forecast/forecast-card-image.png")}
        style={styles.image}
      />
    </Card>
  );
};


export default SaleForecastCard;
