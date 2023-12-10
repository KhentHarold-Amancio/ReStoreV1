import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, Stack } from "expo-router";
import { Icon } from "@ui-kitten/components";
import { Card, DataTable, ActivityIndicator } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";

import { COLORS, images, FONT, SIZES } from "../../constants";

import { useRestore } from "../../hooks/useRestore";

const BackIcon = (props): IconElement => (
  <Icon {...props} name="arrow-ios-back" />
);

const SalesPerformanceView = () => {
  const { fetchSalesPerformanceData, salesPerformanceData, isLoading, error } =
    useRestore();
  const router = useRouter();

  const handleFetchData = async () => {
    fetchSalesPerformanceData();
  };

  useEffect(() => {
    handleFetchData();
    console.log("Sales Performance:", salesPerformanceData);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.gray,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Stack.Screen
        options={{
          headerStyle: {
            height: 200,
            backgroundColor: COLORS.gray,
            marginTop: 20,
          },
          headerShadowVisible: false,
          headerTitle: "History",
          headerTitleAlign: "center",
          headerTitleStyle: {
            marginTop: 10,
            fontFamily: FONT.medium,
            color: COLORS.white,
            fontSize: SIZES.xLarge,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 6,
                marginLeft: -10,
              }}
              onPress={() => router.back()}>
              <BackIcon fill={COLORS.white} width={35} height={35} />
              <Text
                style={{
                  fontFamily: FONT.regular,
                  color: COLORS.white,
                  fontSize: SIZES.large,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      {/* Below is where you will add your components */}
      <Card style={styles.container}>
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
          <ScrollView style={styles.scrollContainer}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator color={COLORS.primary} size={"large"} />
              </View>
            ) : (
              salesPerformanceData.reverse().map((data, index) => (
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
                    {`${
                      Number(data.DifferenceInSales) < 0 ? "-" : ""
                    }${Math.abs(
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
          </ScrollView>
        </DataTable>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    height: SIZES.height * 0.9,
    width: SIZES.width * 0.95,
    marginBottom: 10,
  },
  textStyle: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
  },
  titleStyle: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
  },
  iconStyle: {
    color: COLORS.white,
    fontSize: 20,
    marginRight: 10,
  },
  icon: {
    color: COLORS.white,
    fontSize: 20,
    marginRight: 10,
  },
  label: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    marginBottom: 5,
  },
  scrollContainer: {
    height: SIZES.height * 0.83,
    overflow: "hidden",
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SalesPerformanceView;
