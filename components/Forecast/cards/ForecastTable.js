import { View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text, DataTable } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import CustomDivider from "../../divider/customdivider";


const ForecastTable = () => {
  const data = [
    {forecast: 26, demand: 35, month: 'April'},
  ]

  return (
    <Card style={styles.container}>
      <Card.Title
        title="Next Month Forecast"
        titleStyle={[
          styles.textStyle,
          { fontFamily: FONT.bold, fontSize: SIZES.medium },
        ]}
      />
      <CustomDivider dividerColor={COLORS.gray} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DataTable style={{ justifyContent: "center", alignSelf: "center" }}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.titleStyle}>
              Month
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Demand
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Sales
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              % Change
            </DataTable.Title>
          </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell textStyle={styles.textStyle}>{data[0].month}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>{data[0].demand}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>${data[0].forecast}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textPercent}>55%</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
      </View>
    </Card>
  );
};

export default ForecastTable;
