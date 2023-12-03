import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { useRouter, Stack, Link } from "expo-router";
import { Icon } from "@ui-kitten/components";
import { Card, DataTable } from "react-native-paper";
import { Dropdown } from 'react-native-element-dropdown';

import { COLORS, images, FONT, SIZES } from "../../constants";

const BackIcon = (props): IconElement => (
  <Icon {...props} name="arrow-ios-back" />
);

const ProductListView = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerTitle: "Products",
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

      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
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
  dropdown: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
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
});

export default ProductListView;
