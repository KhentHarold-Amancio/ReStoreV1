import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Icon } from "@ui-kitten/components";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/Summary.style";

const Summary = () => {
  const [isTrendUp, setIsTrendUp] = useState(true);

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

  // Dummy data
  const summaryData = {
    grossSales: {
      trendIcon: isTrendUp ? <TrendUp /> : <TrendDown />,
      percentage: "30%",
      comparisonText: "from last month",
      label: "Gross Sales",
      value: "$5000.00",
    },
    projectedSales: {
      label: "Projected Sales",
      value: "$7000.00",
    },
  };

  return (
    <View>
      <View style={styles.container}>
        <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.headerContainer}>
              {summaryData.grossSales.trendIcon}
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.medium,
                    fontSize: SIZES.small,
                    color:
                      summaryData.grossSales.percentage > 0
                        ? COLORS.quaternary
                        : COLORS.tertiary,
                  },
                ]}>
                {summaryData.grossSales.percentage}
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.light,
                    fontSize: SIZES.xxSmall,
                    marginLeft: 5,
                  },
                ]}>
                {summaryData.grossSales.comparisonText}
              </Text>
            </View>
            <View style={{ marginTop: -5 }}>
              <Text
                style={[
                  styles.textStyle,
                  { fontFamily: FONT.bold, fontSize: SIZES.smallmedium },
                ]}>
                {summaryData.grossSales.label}
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  { fontFamily: FONT.regular, fontSize: SIZES.smallmedium },
                ]}>
                {summaryData.grossSales.value}
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.cardContainer, { marginEnd: 10 }]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.headerContainer}>
              {summaryData.grossSales.trendIcon}
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.medium,
                    fontSize: SIZES.small,
                    color:
                      summaryData.grossSales.percentage > 0
                        ? COLORS.quaternary
                        : COLORS.tertiary,
                  },
                ]}>
                {summaryData.grossSales.percentage}
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontFamily: FONT.light,
                    fontSize: SIZES.xxSmall,
                    marginLeft: 5,
                  },
                ]}>
                from last month
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
                {summaryData.grossSales.value}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default Summary;
