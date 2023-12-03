import { View, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text, DataTable } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import CustomDivider from "../../divider/customdivider";

const generateDummyData = (count) => {
  const dummyData = [];
  for (let i = 1; i <= count; i++) {
    dummyData.push({
      key: i,
      month: `Item ${i}`,
      forecast: Math.floor(Math.random() * 500) + 100,
      actual: Math.floor(Math.random() * 20) + 5,
      variance: Math.floor(Math.random() * 20) + 5,
    });
  }
  return dummyData;
};

const SaleSummaryTable = () => {
  const items = generateDummyData(3);

  return (
    <Card style={styles.container}>
      <Card.Title
        title="Sales Performance"
        subtitle="3-month data"
        titleStyle={[
          styles.textStyle,
          { fontFamily: FONT.bold, fontSize: SIZES.medium },
        ]}
        subtitleStyle={[
          styles.textStyle,
          { fontFamily: FONT.regular, fontSize: SIZES.small, marginTop: -10 },
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
              Forecast
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Actual
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Variance
            </DataTable.Title>
          </DataTable.Header>

          {items.map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell textStyle={styles.textStyle}>
                {item.month}
              </DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>
                {`$${item.forecast}`}
              </DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>
                {`$${item.actual}`}
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                textStyle={[
                  styles.textStyle,
                  {
                    color:
                      item.variance > 0 ? COLORS.tertiary : COLORS.quaternary,
                  },
                ]}>
                {`$${item.variance}`}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: COLORS.gray2,
    marginHorizontal: 10,
    height: "auto",
    justifyContent: "center",
    marginBottom: 10,
    paddingBottom: 20,
  },
  titleStyle: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    justifyContent: "center",
    fontSize: SIZES.medium,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    justifyContent: "center",
    fontSize: SIZES.medium,
  },
  contentStyle: {
    justifyContent: "center", // Center the cell text horizontally
  },
});

export default SaleSummaryTable;
