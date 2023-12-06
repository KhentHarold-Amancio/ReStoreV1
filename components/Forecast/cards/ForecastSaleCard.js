import { View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/ForecastSale.style";
const ForecastSaleCard = () => {

  return (
    <TouchableOpacity>
    <Card style={styles.container}>
      <Card.Content contentStyle={styles.container}>
        <Text style={[styles.textStyle, {fontFamily: FONT.bold, fontSize: SIZES.medium}]}>Quarterly sales</Text>
        <Text style={[styles.textStyle, {marginTop: 5, marginBottom: 10, fontFamily: FONT.medium, fontSize: SIZES.xxLarge}]}>$27,XXX.XX</Text>
        <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.small}]}>Data as of XX-XX-XXXX</Text>
      </Card.Content>
      <Image
        source={require("../../../assets/images/forecast/forecast-card-image.png")}
        style={styles.image}
      />
    </Card>
    </TouchableOpacity>
  );
};


export default ForecastSaleCard;
