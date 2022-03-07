import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();


import Home from "../screens/Farmer/Home";
import Animal from "../screens/Farmer/Animal";
import CustomerService from "../screens/Farmer/CustomerService";
import Profile from "../screens/Farmer/Profile";
export const AppStackFarmer = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#26A963',
                tabBarInactiveTintColor: 'white',
                TabBarActiveBackgroundColor: '#50E194',
                TabBarInactiveBackgroundColor: '#50E194',
                tabBarStyle: {
                    backgroundColor: '#50E194',
                    paddingBottom: 3
                }
            }}
        >
            <Tab.Screen options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" size={size} color={color} />
                )
            }} name="Home" component={Home} />


            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-paw" size={size} color={color} />
                )
            }} name="Ternak" component={Animal} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="customerservice" size={size} color={color} />
                )
            }} name="Bantuan" component={CustomerService} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" size={size} color={color} />
                )
            }} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
