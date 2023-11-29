import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <Text style={{fontFamily: 'ChakraPetchBold', fontSize: 42}}>
                Home
                
            </Text>
            <TouchableOpacity onPress={() => router.push('/about')}>
                <Text style={{fontFamily: 'ChakraPetchBold', fontSize: 42}}>
                    About
                </Text>   
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;