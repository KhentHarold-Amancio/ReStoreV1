import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import {
  Avatar,
  Button,
  Card,
  Text,
  DataTable,
  ActivityIndicator,
} from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import CustomDivider from "../../divider/customdivider";
import { useRestore } from "../../../hooks/useRestore";
import Icon from "react-native-vector-icons/FontAwesome";

const SaleSummaryTable = () => {
  const { fetchSalesPerformanceData, salesPerformanceData, isLoading, error } =
    useRestore();
  const router = useRouter();

  const handleFetchData = async () => {
    try {
      await fetchSalesPerformanceData();
    } catch (e) {
      console.error("Error fetching sales performance data:", e);
    }
  };

  useEffect(() => {
    handleFetchData();
    console.log("Sales Performance:", salesPerformanceData);
  }, []);

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
        right={() => (
          <TouchableOpacity onPress={() => router.push('/performance')} style={{ padding: 10}}>
            <View style={styles.viewDetails}>
              <Text
                style={[
                  styles.textStyle,
                  { marginRight: 5, fontSize: SIZES.small },
                ]}
              >
                View more
              </Text>
              <Icon name="chevron-right" size={20} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        )}
        rightStyle={{ marginRight: 10 }}
        
      />

      <CustomDivider dividerColor={COLORS.gray} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <DataTable style={{ justifyContent: "center", alignSelf: "center" }}>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.titleStyle}>
              Month
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Actual
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Change $
            </DataTable.Title>
            <DataTable.Title numeric textStyle={styles.titleStyle}>
              Change %
            </DataTable.Title>
          </DataTable.Header>

          {isLoading ? (
            <View style={styles.loadingContainer}>
            <ActivityIndicator color={COLORS.primary} size={"small"} />
            </View>
          ) : (
            salesPerformanceData.slice(-3).map((data, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell textStyle={styles.textStyle}>
                  {data.Month}
                </DataTable.Cell>
                <DataTable.Cell numeric textStyle={styles.textStyle}>
                  {`$${data.Sales.toLocaleString()}`}
                </DataTable.Cell>
                <DataTable.Cell
                  numeric
                  textStyle={[
                    styles.textStyle,
                    {
                      color:
                        data.DifferenceInSales < 0
                          ? COLORS.quaternary
                          : COLORS.tertiary,
                    },
                  ]}>
                  {`${Number(data.DifferenceInSales) < 0 ? "-" : ""}${Math.abs(
                    Number(data.DifferenceInSales)
                  ).toLocaleString()}`}
                </DataTable.Cell>

                <DataTable.Cell
                  numeric
                  textStyle={[
                    styles.textStyle,
                    {
                      color:
                        data.PercentageIncrease > 0
                          ? COLORS.tertiary
                          : COLORS.quaternary,
                    },
                  ]}>
                  {`${data.PercentageIncrease}`}
                </DataTable.Cell>
              </DataTable.Row>
            ))
          )}
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
    marginBottom: 15,
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
  viewDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  loadingContainer: {
    bottom: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SaleSummaryTable;
