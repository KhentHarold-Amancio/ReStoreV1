import { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Layout, Text } from "@ui-kitten/components";

import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";

import { COLORS, images, FONT } from "../../constants";
import styles from "../../components/commons/header/styles/header.style";
import Summary from "../../components/Homes/cards/Summary";
import SaleForecastCard from "../../components/Homes/cards/SaleForecastCard";
import SaleSummaryCard from "../../components/Homes/cards/SaleSummaryCard";
import ForecastTable from "../../components/Forecast/cards/ForecastTable";

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
              <HeaderLogo logoUrl={images.logo} /> 
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
      <SaleForecastCard />
      <SaleSummaryCard />
      <Summary/>
      <ForecastTable/>
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
