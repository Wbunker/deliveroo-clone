import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import SafeViewAndroid from '../components/SafeViewAndroid'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="bg-white">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={ {uri: 'https://links.papareact.com/wru'}}
                className="h-7 w-7 bg-gray-300 rounded-full p-4"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"  />
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 px-4">
                <SearchIcon color="gray" size={20}/>
                <TextInput 
                    placeholder='Restaurants and cuisines'
                    keyboardType='default'
                />
            </View>
            <AdjustmentsIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView 
            className="bg-gray-100"

        >
            {/* Categories */}
            <Categories />
            {/* Featured row */}
            <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from out partners"
            />
            <FeaturedRow
                id="1234"
                title="Tasty Discounts"
                description="Everyon's been enjoying these juicy discounts"
            />
            <FeaturedRow
                id="1235"
                title="Offers near you!"
                description="Why not support your local restaurant tonight!"
            />

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen