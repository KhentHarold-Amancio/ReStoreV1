import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text, DataTable } from "react-native-paper";
import { SIZES, COLORS, FONT } from "../../../constants";
import CustomDivider from "../../divider/customdivider";
import Icon from "react-native-vector-icons/FontAwesome";

const generateDummyData = (count) => {
  const dummyData = [];
  for (let i = 1; i <= count; i++) {
    dummyData.push({
      key: i,
      productID: `Item ${i}`,
      productName: Math.floor(Math.random() * 500) + 100,
      totalSales: Math.floor(Math.random() * 20) + 5,
    });
  }
  return dummyData;
};

const ProductListCard = () => {
  const items = generateDummyData(3);
  return (
    <Card style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={[styles.textStyle, { fontSize: SIZES.medium }]}>
            Products
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.viewDetails}>
            <Text
              style={[
                styles.textStyle,
                { marginRight: 5, fontSize: SIZES.small },
              ]}>
              View more
            </Text>
            <Icon name="chevron-right" size={20} color={COLORS.white} />
            <Icon name="chevron-right" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
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
              Total Sales
            </DataTable.Title>
          </DataTable.Header>

          {items.map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell textStyle={styles.textStyle}>
                {item.productID}
              </DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.textStyle}>
                {item.productName}
              </DataTable.Cell>
              <DataTable.Cell numeric textStyle={[styles.textStyle, { color: item.totalSales > 0 ? COLORS.tertiary : COLORS.quaternary }]}>
                {`$${item.totalSales}`}
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
    marginBottom: 10,
    height: "auto",
    width: SIZES.cardWidth,
    flexDirection: "column",
    borderColor: "transparent",
    borderRadius: 10,
    shadowRadius: 10,
    paddingBottom: 20,
  },
  text: {
    color: "white",
  },
  titleStyle: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    justifyContent: "center",
    fontSize: SIZES.medium,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 10,
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
});
export default ProductListCard;
