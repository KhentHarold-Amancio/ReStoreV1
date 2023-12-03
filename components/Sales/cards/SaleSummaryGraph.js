import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { Card, Text, Divider, SegmentedButtons } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Graph from "../graph/graph";
import GroupButton from "../buttons/groupbutton";

const SaleSummaryGraph = ({ handleNavigate }) => {
  const [value, setValue] = React.useState("day");
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
          <TouchableOpacity onPress={handleNavigate}>
            <View style={styles.viewDetails}>
              <Text
                style={[
                  styles.textStyle,
                  { marginRight: 5, fontSize: SIZES.small },
                ]}>
                View details
              </Text>
              <Icon name="chevron-right" size={20} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>
        <Card.Content></Card.Content>
        <Divider style={styles.dividerStyle} />
        <GroupButton />
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}>
          <Graph />
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: COLORS.gray2,
    margin: 10,
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
});

export default SaleSummaryGraph;