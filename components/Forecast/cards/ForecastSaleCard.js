import { View, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { COLORS, SIZES, FONT } from "../../../constants";
import styles from "./styles/Forecast.style";

const ForecastSaleCard = () => {
  return (
    <Card style={styles.container}>
      <Card.Content contentStyle={{ }}>
      <Text style={[styles.textStyle, {fontFamily: FONT.bold, fontSize: SIZES.large}]}>Quarterly Sales</Text>
      <Text style={[styles.textStyle, {marginTop: 5, marginBottom: 10, fontFamily: FONT.medium, fontSize: SIZES.xxLarge}]}>$XX,XXX.XX</Text>
      </Card.Content>
      <Image
        source={require("../../../assets/images/forecast/forecast-card-image.png")}
        style={styles.image}
      />
    </Card>
  );
};

export default ForecastSaleCard;
