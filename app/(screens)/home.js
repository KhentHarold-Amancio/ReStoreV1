import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { Layout, Text } from "@ui-kitten/components";

import HeaderText from "../../components/commons/header/headerText";

import { COLORS, images, SIZES, FONT } from "../../constants";
import styles from "../../components/commons/header/styles/header.style";
import SummaryCard from "../../components/Homes/cards/SummaryCard";
import ForecastSaleCard from "../../components/Forecast/cards/ForecastSaleCard";
import SaleSummaryCard from "../../components/Sales/cards/SaleSummaryCard";
import ImportButtonDemands from "../../components/Settings/Buttons/ImportButtonDemands";
import ImportButton from "../../components/Settings/Buttons/ImportButton";
import ReloadButton from "../../components/Homes/cards/buttons/ReloadButton";

const HomeView = () => {
  const router = useRouter();
  
  return (
    <Layout style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <ReloadButton />
            </View>
          ),
          headerTitle: <HeaderText headerTitle="Home" />,
          headerTitleStyle: {
            marginTop: 10,
            fontSize: 40,
            fontFamily: FONT.bold,
            color: COLORS.white,
          },
        }}
      />
      <ScrollView>
        <ForecastSaleCard onPress={() => router.push("/forecast")} />
        <SaleSummaryCard onPress={() => router.push("/sales")} />
        <Text
          style={[
            styles.textStyle,
            {
              marginLeft: 30,
              fontFamily: FONT.bold,
              fontSize: SIZES.xLarge,
              marginTop: -5,
            },
          ]}
        >
          Summary
        </Text>
        <SummaryCard />
        <View style={{
            marginBottom: 130,
        }}/>
        <ImportButton/>
        <ImportButtonDemands/>
      </ScrollView>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeView;
