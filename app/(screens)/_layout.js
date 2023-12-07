import React from "react";
import { Tabs } from "expo-router/tabs";
import {
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import { COLORS } from "../../constants";

const HomeIcon = (props): IconElement => <Icon {...props} name="home" />;

const ForecastIcon = (props): IconElement => (
  <Icon {...props} name="trending-up" />
);

const SalesIcon = (props): IconElement => (
  <Icon {...props} name="shopping-cart" />
);

const SettingsIcon = (props): IconElement => (
  <Icon {...props} name="settings-2" />
);

const BottomTabs = ({ navigation, state }) => {
  return (
    <BottomNavigation
      indicatorStyle={{ backgroundColor: COLORS.primary }}
      style={{
        paddingHorizontal: 4,
        paddingVertical: 15,
        backgroundColor: "rgba(0.047, 0.047, 0.047, 1)",
      }}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title={`Home`} icon={HomeIcon} />
      <BottomNavigationTab title={`Forecast`} icon={ForecastIcon} />
      <BottomNavigationTab title={`Sales`} icon={SalesIcon} />
      <BottomNavigationTab title={`Settings`} icon={SettingsIcon} />
    </BottomNavigation>
  );
};

const StackLayout = ({ route }) => {
  const { params } = route || {};
  const { grossSales, forecastData } = params || {};
  console.log("grossSales", grossSales);
  return (
    <Tabs
    initialRouteName="home"
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
      }}
      tabBar={(props) => <BottomTabs {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          href: null,
        }}
      />
      <Tabs.Screen
        name="forecast"
        options={{
          title: "Forecast",
          href: null,
        }}
      />
      <Tabs.Screen
        name="sales"
        options={{
          title: "Sales",
          href: null,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          href: null,
        }}
      />
    </Tabs>
  );
};

export default StackLayout;
