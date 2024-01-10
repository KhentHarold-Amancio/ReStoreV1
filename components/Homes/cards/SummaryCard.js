import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, ActivityIndicator } from "react-native-paper";
import { Icon } from "@ui-kitten/components";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/Summary.style";
import { useRestore } from "../../../hooks/useRestore";

const SummaryCard = () => {
  const { fetchData, isLoading, forecastData, grossData } =
    useRestore();
    
  const handleFetchData = () => {
    fetchData();
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const TrendDown = (props) => (
    <Icon
      {...props}
      name="trending-down-outline"
      style={styles.headerLogoStyle}
      fill={COLORS.quaternary}
    />
  );

  const TrendUp = (props) => (
    <Icon
      {...props}
      name="trending-up-outline"
      style={styles.headerLogoStyle}
      fill={COLORS.tertiary}
    />
  );

  return (
    <View style={styles.container}>
      <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
        <Card.Content style={styles.cardContent}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.primary} size={"small"} style={styles.loadingContainer}/>
          ) : grossData ? (
            <>
              <View style={styles.headerContainer}>
                {grossData.percent_increase < 0 ? (
                  <TrendDown />
                ) : (
                  <TrendUp />
                )}
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontFamily: FONT.medium,
                      fontSize: SIZES.small,
                      color:
                        grossData.length > 0 &&
                        grossData.percent_increase < 0
                          ? COLORS.quaternary
                          : COLORS.tertiary,
                    },
                  ]}>
                  {grossData.percent_increase}
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontFamily: FONT.light,
                      fontSize: SIZES.xSmall,
                      marginLeft: 5,
                    },
                  ]}>
                  this month
                </Text>
              </View>
              <View style={{ marginTop: -5 }}>
                <Text
                  style={[
                    styles.textStyle,
                    { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
                  ]}>
                  Gross Sales
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
                  ]}>
                  $
                  {grossData.cumulative_gross_sales}
                </Text>
              </View>
            </>
          ) : (
            <Text>Error loading gross data.</Text>
          )}
        </Card.Content>
      </Card>
      {/* Forecast Data Card */}
      <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
        <Card.Content style={styles.cardContent}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.primary} size={"small"} style={styles.loadingContainer}/>
          ) : forecastData ? (
            <View>
              <View style={styles.headerContainer}>
                {forecastData["percentage_increase"] > 0 ? (
                  <TrendUp />
                ) : (
                  <TrendDown />
                )}
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontFamily: FONT.medium,
                      fontSize: SIZES.small,
                      color:
                        forecastData["percentage_increase"] >= 0
                          ? COLORS.tertiary
                          : COLORS.quaternary,
                    },
                  ]}>
                  {forecastData["percentage_increase"]}%
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontFamily: FONT.light,
                      fontSize: SIZES.xSmall,
                      marginLeft: 5,
                    },
                  ]}>
                  next month
                </Text>
              </View>
              <View style={{ marginTop: -5 }}>
                <Text
                  style={[
                    styles.textStyle,
                    { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
                  ]}>
                  Projected Sales
                </Text>
                <Text
                  style={[
                    styles.textStyle,
                    { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
                  ]}>
                  ${forecastData["prediction"]}
                </Text>
              </View>
            </View>
          ) : (
            <Text>Error loading forecast data.</Text>
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

export default SummaryCard;
