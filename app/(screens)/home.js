import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { Layout, Text, Icon } from "@ui-kitten/components";

import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";

import { COLORS, images, SIZES, FONT } from "../../constants";
import styles from "../../components/commons/header/styles/header.style";
import SummaryCard from "../../components/Homes/cards/SummaryCard";
import SaleForecastCard from "../../components/Homes/cards/SaleForecastCard";
import SaleSummaryCard from "../../components/Homes/cards/SaleSummaryCard";
<<<<<<< HEAD
=======
import { useRestore } from "../../hooks/useRestore";
import ImportButton from "../../components/Settings/Buttons/ImportButton";
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4

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
        <SaleForecastCard onPress={() => router.push("/forecast")} />
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
<<<<<<< HEAD

=======
        <View
          style={{
            padding: 60,
          }}
        ></View>
        <ImportButton />
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4
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
