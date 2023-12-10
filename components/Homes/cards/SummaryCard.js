import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { Icon } from "@ui-kitten/components";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/Summary.style";
import { useRestore } from "../../../hooks/useRestore";

const SummaryCard = () => {
<<<<<<< HEAD
  const {
    fetchData,
    isLoading,
    forecastData,
    grossData,
    refetch,
  } = useRestore();
=======
  const restore = useRestore();

  while (restore.isLoading) {
    return null;
  }

  const grossData = restore.grossSales[0];

  const isForecastTrendUp = 1;
  const isGrossSalesTrendUp = grossData.percent_increase > 0;
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4

  const handleFetchData = () => {
    fetchData();
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

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
<<<<<<< HEAD
    <View style={styles.container}>
      <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.headerContainer}>
            {grossData < 0 ? <TrendDown /> : <TrendUp />}
            <Text
              style={[
                styles.textStyle,
                {
                  fontFamily: FONT.medium,
                  fontSize: SIZES.small,
                  color: grossData < 0
                    ? COLORS.quaternary
                    : COLORS.tertiary,
                },
              ]}
            >
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
              ]}
            >
              this month
            </Text>
          </View>
          <View style={{ marginTop: -5 }}>
            <Text
              style={[
                styles.textStyle,
                { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
              ]}
            >
              Gross Sales
            </Text>
            <Text
              style={[
                styles.textStyle,
                { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
              ]}
            >
              ${grossData.cumulative_gross_sales}
            </Text>
          </View>
        </Card.Content>
      </Card>
      {/* Forecast Data Card */}
      <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.headerContainer}>
            {forecastData.accuracy > 0 ? <TrendUp /> : <TrendDown />}
            <Text
              style={[
                styles.textStyle,
                {
                  fontFamily: FONT.medium,
                  fontSize: SIZES.small,
                  color: forecastData.percent_increase > 0
                    ? COLORS.quaternary
                    : COLORS.tertiary,
                },
              ]}
            >
              {forecastData.accuracy}%
            </Text>
            <Text
              style={[
                styles.textStyle,
                {
                  fontFamily: FONT.light,
                  fontSize: SIZES.xSmall,
                  marginLeft: 5,
                },
              ]}
            >
              next month
            </Text>
          </View>
          <View style={{ marginTop: -5 }}>
            <Text
              style={[
                styles.textStyle,
                { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
              ]}
            >
              Projected Sales
            </Text>
            <Text
              style={[
                styles.textStyle,
                { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
              ]}
            >
              ${forecastData.prediction}
            </Text>
          </View>
        </Card.Content>
      </Card>
=======
    <View>
      <View style={styles.container}>
        <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.headerContainer}>
              {isGrossSalesTrendUp ? <TrendDown /> : <TrendUp />}
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.medium,
                    fontSize: SIZES.small,
                    color: isGrossSalesTrendUp
                      ? COLORS.quaternary
                      : COLORS.tertiary,
                  },
                ]}
              >
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
                ]}
              >
                this month
              </Text>
            </View>
            <View style={{ marginTop: -5 }}>
              <Text
                style={[
                  styles.textStyle,
                  { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
                ]}
              >
                Gross Sales
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
                ]}
              >
                ${grossData.cumulative_gross_sales}
                {console.log("GROSS SALES", grossData.cumulative_gross_sales)}
              </Text>
            </View>
          </Card.Content>
        </Card>
        {/* Forecast Data Card */}
        <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.headerContainer}>
              {isForecastTrendUp ? <TrendUp /> : <TrendDown />}
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.medium,
                    fontSize: SIZES.small,
                    color: isForecastTrendUp
                      ? COLORS.tertiary
                      : COLORS.quaternary,
                  },
                ]}
              >
                {97}
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.light,
                    fontSize: SIZES.xSmall,
                    marginLeft: 5,
                  },
                ]}
              >
                next month
              </Text>
            </View>
            <View style={{ marginTop: -5 }}>
              <Text
                style={[
                  styles.textStyle,
                  { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
                ]}
              >
                Projected Sales
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
                ]}
              >
                {34}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4
    </View>
  );
};

export default SummaryCard;
