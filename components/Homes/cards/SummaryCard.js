import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { Icon } from "@ui-kitten/components";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/Summary.style";

const SummaryCard = ({ grossData, forecastData }) => {
  const isForecastTrendUp = forecastData.accuracy > 0;
  const isGrossSalesTrendUp = grossData.percent_increase > 0;

  const TrendDown = (props): IconElement => (
    <Icon
      {...props}
      name="trending-down-outline"
      style={styles.headerLogoStyle}
      fill={COLORS.quaternary}
    />
  );

  const TrendUp = (props): IconElement => (
    <Icon
      {...props}
      name="trending-up-outline"
      style={styles.headerLogoStyle}
      fill={COLORS.tertiary}
    />
  );
  
  return (
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
                          {forecastData.accuracy}
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
                          {forecastData.prediction}
                      </Text>
                  </View>
              </Card.Content>
          </Card>


      </View>
    </View>
  );
};

export default SummaryCard;
