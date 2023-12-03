import { View,
        Text,
        SafeAreaView,
        ScrollView,
        StyleSheet,
        TouchableOpacity,
        Switch,
        Pressable, } from 'react-native'
import { useRouter, Stack } from 'expo-router';
import React from 'react'
import { Image } from 'react-native-svg';

import { useState, useFonts } from 'react';

import { COLORS, images, FONT } from "../../constants";

import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";

import styles from "../../components/commons/header/styles/header.style";
import Ionicons from 'react-native-vector-icons/Ionicons';

function MyCheckbox() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[style.checkboxBase, checked && style.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color={COLORS.gray} />}
    </Pressable>
  );
}

const SettingsView = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    const darkModeOnpress = () => {
        setIsEnabled(previousState => !previousState);
    };
    const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, height: "100%" }}>
      <ScrollView>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.white },
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
            color: COLORS.gray,
          },
        }}
      />
      {/* Below is where you will add your components */}
            <View style={style.container}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                flexWrap: 'wrap',
                marginTop: 40,
                alignContent: 'center'
            }}>
                <View style={style.opTion}>
                    <TouchableOpacity
                        style={{
                            width: 'auto',
                            flexDirection: 'row'
                        }}
                        onPress={darkModeOnpress}
                    >
                        <Image
                            source={require('../../assets/images/settings/moon.png')}
                            style={{
                                width: 35,
                                height: 35,
                                marginTop: 5
                                }}
                        />
                        <Text style={style.text}>Dark Mode</Text>
                    </TouchableOpacity>

                    <Switch
                            style={{
                                marginLeft: 100,
                                transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Scale the Switch component
                            }}
                            trackColor={{false: '#E3E5E5', true: '#3463E1'}}
                            thumbColor={isEnabled ? '#FFFFFF': '#FFFFFF'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                    />
                </View>
                
                {/* Statistics and backup & restore section */}
                <View
                style={{
                    width: 338,
                    height: 2,
                    backgroundColor: COLORS.gray,
                    marginLeft: 20,
                }}
                />

                <View style={style.trio}>

                    {/* Statistics */}
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                        }}
                        >
                            <Image
                                source={require('../../assets/images/settings/stats.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop: 5,
                                }}
                            />
                        <Text style={{
                            fontFamily: FONT.medium,
                            fontSize: 34,
                            marginLeft: 20,
                        }}>Statistics</Text>
                    </TouchableOpacity>
                    
                    {/* Backup and restore */}
                    <TouchableOpacity
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    marginTop: 15,
                                }}
                                >
                            <Image
                                source={require('../../assets/images/settings/backupandrestore.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop: 5
                                }}
                            />
                        <Text style={{
                            fontFamily: FONT.medium,
                            fontSize: 34,
                            marginLeft: 20,
                        }}>Backup and restore</Text>
                    </TouchableOpacity>
                </View>

                <View
                style={{
                    width: 338,
                    height: 2,
                    backgroundColor: COLORS.gray,
                    marginLeft: 20,
                }}
                />
            
            <View style={style.trio2}>

                    <TouchableOpacity
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                        }}
                        onPress={() => navigation.navigate("About")}
                        >
                            <Image
                                source={require('../../assets/images/settings/About.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop: 6
                                }}
                            />
                        <Text style={{
                            fontFamily: FONT.medium,
                            fontSize: 34,
                            marginLeft: 20,
                        }}>About</Text>
                    </TouchableOpacity>
                    
                    {/* Backup and restore */}
                    <TouchableOpacity
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    marginTop: 15,
                                }}
                                >
                            <Image
                                source={require('../../assets/images/settings/Help.png')}
                                style={{
                                    width: 35,
                                    height: 35,
                                    marginTop: 8
                                }}
                            />
                        <Text style={{
                            fontFamily: FONT.medium,
                            fontSize: 34,
                            marginLeft: 20,
                        }}>Help</Text>
                    </TouchableOpacity>
                </View>

                <View
                style={{
                    width: 338,
                    height: 2,
                    backgroundColor: COLORS.gray,
                    marginLeft: 20,
                }}
                />

                {/*Import database part*/}
                <View style={style.imp}>
                {/*agree chuchu*/}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        width: '80%',
                        fontFamily: FONT.bold
                    }}>
                        I agree with the Terms of use and Privacy policy.
                    </Text>
                    <MyCheckbox/>
                </View>

                {/*Import button*/}
                <TouchableOpacity
                    style={{
                        width: 320,
                        height: 56,
                        backgroundColor: '#3463E1',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 16,
                        marginTop: '5%'
                    }}
                >
                    <Text style={{
                        fontFamily: FONT.medium,
                        fontSize: 20,
                        color: '#fff'
                    }}>Import File</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
      {/*End*/}
      </ScrollView>
      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  checkboxBase: {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#AFB1B6',
      backgroundColor: 'transparent',
    },
    checkboxChecked: {
      backgroundColor: '#E3E5E5',
    },
  imp: {
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '8%',
      marginTop: '25%'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  opTion: {
    marginLeft: 20,
    marginBottom: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    marginRight: 20,
  },
  trio: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    marginRight: 20,
  },
  trio2: {
      marginLeft: 20,
      marginTop: 15,
      marginBottom: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
      marginRight: 20,
    },
  toppart: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  header: {
      marginTop: 50,
      marginLeft: 20,
      fontSize: 45,
      fontFamily: FONT.bold,
      color: COLORS.gray,
  },
  text: {
      fontFamily: FONT.bold,
      fontSize: 34,
      marginLeft: 20,
  },
  logo: {
      marginLeft: 140,
      marginTop: 60,
      height: 60,
      width: 60
  }
})

export default SettingsView;