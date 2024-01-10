import {View, StyleSheet, StatusBar, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import React, {useEffect} from "react";
import { useRouter } from "expo-router";
import { Avatar, Button, Card, Text, DataTable } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import CustomDivider from "../../divider/customdivider";


const ForecastTable = ({ prodData, isLoadingDemand }) => {

  console.log("Demand data on Product Forecast Table:", prodData);

  return (
    <Card style={styles.container}>
      <Card.Title
        title="Products"
        titleStyle={[
          styles.textStyle,
          { fontFamily: FONT.bold, fontSize: SIZES.smallmedium, marginBottom: -5 },
        ]}
      />
      <CustomDivider dividerColor={COLORS.gray} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DataTable style={{ justifyContent: "center", alignSelf: "center" }}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.titleStyle}>
              Product ID
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Product Name
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Projected Demand
            </DataTable.Title>
          </DataTable.Header>
            {
              isLoadingDemand || !prodData ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator color={COLORS.primary} size={"small"} />
                </View>
              ) : (
                  Object.keys(prodData).map((productId) => {
                    const predictions = prodData[productId].predictions;

                    // Check if predictions array is not empty before accessing its elements
                    if (predictions && predictions.length > 0) {
                      const data = predictions[0];
                      return (
                          <DataTable.Row key={productId}>
                            <DataTable.Cell textStyle={styles.textStyle}>
                              {data.ProductID}
                            </DataTable.Cell>
                            <DataTable.Cell textStyle={styles.textStyle}>
                              {data.Product}
                            </DataTable.Cell>
                            <DataTable.Cell textStyle={styles.textStyle}>
                              {data.UnitsSold}
                            </DataTable.Cell>
                          </DataTable.Row>
                      );
                    } else {
                      // Handle the case where predictions array is empty
                      return (
                          <DataTable.Row key={productId}>
                            <DataTable.Cell textStyle={styles.textStyle}>
                              {productId}
                            </DataTable.Cell>
                            <DataTable.Cell textStyle={styles.textStyle}>
                              No predictions available
                            </DataTable.Cell>
                            <DataTable.Cell textStyle={styles.textStyle}>
                              N/A
                            </DataTable.Cell>
                          </DataTable.Row>
                      );
                    }
                  })
              )
            }
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
    paddingBottom: 15,
  },
  titleStyle: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    justifyContent: "center",
    fontSize: SIZES.medium,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    justifyContent: "space-between",
    alignItems: 'center',
    fontSize: SIZES.small,
  },
  textPercent: {
    color: COLORS.tertiary,
    fontFamily: FONT.regular,
    justifyContent: "space-between",
    fontSize: SIZES.small,
  },
  contentStyle: {
    justifyContent: "center", // Center the cell text horizontally
  },
});

export default ForecastTable;