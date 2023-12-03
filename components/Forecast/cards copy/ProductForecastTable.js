import { View, StyleSheet, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text, DataTable } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import CustomDivider from "../../divider/customdivider";
import { Redirect } from "expo-router";

const ProductForecastTable = () => {
  const data = [
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: "Scrunchie", Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
    {Name: 'Scrunchie', Price: '$15', Sold: 400, Demand: 600, Sales: '$900'},
  ]

  const limitedData = data.slice(0, 3); // Limit to the first 3 items

  return (
    <Card style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card.Title
                title="Products Forecast"
                titleStyle={[
                styles.textStyle,
                { fontFamily: FONT.bold, fontSize: SIZES.medium },
                ]}
            />
            <TouchableOpacity>
                <Text style={styles.textbutton} Redirect href="/ForecastProductDetailsView"> View more >> </Text>
            </TouchableOpacity>
        </View>
      <CustomDivider dividerColor={COLORS.gray} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DataTable style={{ justifyContent: "center", alignSelf: "center" }}>
          <DataTable.Header>
            <DataTable.Title numberOfLines={2} ellipsizeMode="tail" textStyle={styles.titleStyle}>
              Product Name
            </DataTable.Title>
            <DataTable.Title numberOfLines={2} ellipsizeMode="tail" numeric textStyle={styles.titleStyle}>
              Price
            </DataTable.Title>
            <DataTable.Title numberOfLines={2} ellipsizeMode="tail" numeric textStyle={styles.titleStyle}>
              Total Sold
            </DataTable.Title>
            <DataTable.Title numberOfLines={2} ellipsizeMode="tail" numeric textStyle={styles.titleStyle}>
              Demand Next Month
            </DataTable.Title>
            <DataTable.Title numberOfLines={2} ellipsizeMode="tail" numeric textStyle={styles.titleStyle}>
              Sales Next Month
            </DataTable.Title>
          </DataTable.Header>
          {limitedData.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell textStyle={styles.textStyle}>{item.Name}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>{item.Price}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>{item.Sold}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>{item.Demand}</DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>{item.Sales}</DataTable.Cell>
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
  },
  titleStyle: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    justifyContent: "center",
    fontSize: SIZES.small,
    overflow: 'visible'
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    justifyContent: "center",
    alignItems: 'center',
    fontSize: SIZES.small,
    justifyContent: 'space-between',
  },
  textPercent: {
    color: COLORS.tertiary,
    fontFamily: FONT.regular,
    justifyContent: "center",
    fontSize: SIZES.small,
    justifyContent: 'space-between',
  },
  contentStyle: {
    justifyContent: "center", // Center the cell text horizontally
  },
  textbutton:{
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginLeft: -100,
  },
});

export default ProductForecastTable;
