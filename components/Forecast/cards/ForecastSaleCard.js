import { View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Button, Card, Text, ActivityIndicator } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/ForecastSale.style";
import { useRestore } from "../../../hooks/useRestore";

const ForecastSaleCard = ({ onPress }) => {
  const { fetchForecastData, forecastData, isLoading } = useRestore();

  useEffect(() => {
    const fetch = async () => {
      await fetchForecastData();
    };
    fetch();
  }, []);

  const getQuarterYearLabel = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const quarter = Math.floor((date.getMonth() + 3) / 3);

    const quarterString = {
      1: 'Q1',
      2: 'Q2',
      3: 'Q3',
      4: 'Q4',
    }[quarter];

    return `${quarterString} ${year}`;
  };

  const renderForecastSaleContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={COLORS.primary} />;
    } else if (forecastData) {
      return (
        <>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.textStyle, { marginTop: 5, marginBottom: 10, marginLeft: 5, fontFamily: FONT.medium, fontSize: SIZES.xxLarge }]}>
              ${forecastData.prediction}
            </Text>
            <Text style={[styles.textStyle, { fontFamily: FONT.medium, fontSize: SIZES.xSmall }]}>
              (Estimated)
            </Text>
          </View>
          <Text style={[styles.textStyle, { fontFamily: FONT.regular, fontSize: SIZES.small }]}>
            Forecast for {getQuarterYearLabel(forecastData.next_month)}
          </Text>
        </>
      );
    } else {
      return <Text style={[styles.textStyle, { fontFamily: FONT.regular, fontSize: SIZES.small }]}>No forecast data available</Text>;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.container}>
        <Card.Content contentStyle={styles.container}>
          <Text style={[styles.textStyle, { fontFamily: FONT.bold, fontSize: SIZES.medium }]}>
            Projected Quarterly Sales
          </Text>
          {renderForecastSaleContent()}
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

