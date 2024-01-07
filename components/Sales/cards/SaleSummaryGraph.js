import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, Link } from "expo-router";
import { Card, Text, Divider, ActivityIndicator } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import Graph from "../graph/graph";
import GroupButton from "../buttons/groupbutton";

const SaleSummaryGraph = ({ selectedValue, handleValueChange, isLoading }) => {
  const router = useRouter();
  return (
    <>
      <Card style={styles.container}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={[styles.textStyle, { fontSize: SIZES.medium }]}>
              Sales Summary
            </Text>
          </View>
        </View>
        <Divider style={styles.dividerStyle} />
        <GroupButton
          selectedValue={selectedValue}
          handleValueChange={handleValueChange}
        />

          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}>
            <Graph selectedValue={selectedValue} isLoading={isLoading} />
          </View>

      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: COLORS.gray2,
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 15,
    height: "auto",
    width: SIZES.cardWidth,
    flexDirection: "column",
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
  dividerStyle: {
    backgroundColor: COLORS.gray,
    height: 2,
    width: SIZES.cardWidth,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignContent: "center",
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SaleSummaryGraph;
