import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { COLORS, FONT, SIZES } from '../../constants';
import { Stack, useRouter } from 'expo-router';
import { Card } from 'react-native-paper';
import CustomDivider from '../../components/divider/customdivider';
import { Icon } from "@ui-kitten/components";


const BackIcon = (props): IconElement => (
  <Icon {...props} name="arrow-ios-back" />
);

const AboutScreen = () => {
  const router = useRouter();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerTitle: "About",
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
      <Image
              source={require("../../assets/logo.png")}
              style={styles.img}/>
              <View style={{width:SIZES.width*.90,alignContent: 'center',marginHorizontal: 10}}>
              <View style={styles.dividerStyle}>
              <CustomDivider dividerColor={COLORS.gray2} />
              </View>
              </View>
      {/* Below is where you will add your components */}
      <View style={styles.version}>
          <TouchableOpacity
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={styles.txt}>Version</Text>
            <Text style={styles.txt2}>STABLE X.XX.X (XX/XX/XX XX:XX AM)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.version}>
          <TouchableOpacity
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={styles.txt}>Check for updates</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.version}>
          <TouchableOpacity
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={styles.txt}>What’s new</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.version}>
          <TouchableOpacity
            style={{
              flexDirection: "column",
            }}
            onPress={() => router.push("/policy")}
          >
            <Text style={styles.txt}>Privacy policy</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    width: 150, // Set the desired width
    height: 150, // Set the desired height
  },
  dividerStyle: {
    justifyContent: 'center',
    marginTop: 30,
  },
  version: {
    flexDirection: "row",
    width: SIZES.cardHeight * .95,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    padding: 5,
  },
  txt:{
    marginTop: -10,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.white,
    width: SIZES.cardWidth,
  },
  txt2:{
    marginTop:-15,
    width: SIZES.cardWidth,
    color: COLORS.gray3,
    fontFamily: FONT.bold,
  }
});



export default AboutScreen