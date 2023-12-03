
import { View, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/Summary.style";

const Summary = () => {

    return (
        <View>
        <Text style={[styles.textStyle, {marginLeft:30, fontFamily: FONT.bold, fontSize: SIZES.xLarge}]}>Summary</Text>
        <View style={styles.rowContainer}>
          <Card style={styles.container}>
            <Card.Content style={styles.ContentContainer}>
                <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.xSmall}]}>from last month</Text>
                <Text style={[styles.textStyle, {fontFamily: FONT.bold, fontSize: SIZES.smallmedium}]}>Gross Sales</Text>
                <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.smallmedium}]}>$XXX.XX</Text>
            </Card.Content>
          </Card>
          <Card style={styles.container}>
            <Card.Content style={styles.ContentContainer}>
                <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.xSmall}]}>next month</Text>
                <Text style={[styles.textStyle, {fontFamily: FONT.bold, fontSize: SIZES.smallmedium}]}>Projected Sales</Text>
                <Text style={[styles.textStyle, {fontFamily: FONT.regular, fontSize: SIZES.smallmedium}]}>$XXX.XX</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    );
  };
  
  
  export default Summary;