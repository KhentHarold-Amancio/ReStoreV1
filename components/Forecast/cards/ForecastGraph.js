import {
    View,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Card, Text, Divider, SegmentedButtons, Avatar } from "react-native-paper";
  import { COLORS, FONT, SIZES } from "../../../constants";
  import Icon from "react-native-vector-icons/FontAwesome";
  import LineGraph from "../graph/linegraph";
  
  const ForecastGraph = ({ forecastData, isLoading, salesData }) => {

    return (
      <>
        <Card style={styles.container}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={[styles.textStyle, { fontSize: SIZES.smallmedium}]}>
                Sales Forecast
              </Text>
              <Text style={[styles.textStyle, {fontSize: SIZES.small}]}>
                3-month data
              </Text>
            </View>
          </View>
          <Card.Content></Card.Content>
          <Divider style={styles.dividerStyle} />
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}>
            <LineGraph isLoading={isLoading} forecastData={forecastData} salesData={salesData}/>
          </View>
        </Card>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      backgroundColor: COLORS.gray2,
      margin: 10,
      height: "auto",
      flexDirection: "column",
    },
    textStyle: {
      color: COLORS.white,
      fontFamily: FONT.bold,
    },
    viewDetails: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    dividerStyle: {
      backgroundColor: COLORS.gray,
      height: 2,
      width: SIZES.cardWidth,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignContent: "center",
    },
  });
  
  export default ForecastGraph;
  