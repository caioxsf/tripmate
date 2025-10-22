import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import TripsScreen from '../screens/TripsScreen';
import BudgetScreen from '../screens/BudgetScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripDetailsScreen from '../screens/TripDetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Trips') {
                        iconName = focused ? 'airplane' : 'airplane-outline';
                    } else if (route.name === 'Budget') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00C2FF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#12151A',
                    borderTopColor: 'transparent',
                    height: 72,
                    paddingTop: 8,
                    paddingBottom: 12,
                },
                tabBarLabelStyle: { marginBottom: -20 },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: 'Início' }}
            />
            <Tab.Screen
                name="Trips"
                component={TripsScreen}
                options={{ tabBarLabel: 'Viagens' }}
            />
            <Tab.Screen
                name="Budget"
                component={BudgetScreen}
                options={{ tabBarLabel: 'Orçamento' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Perfil' }}
            />
        </Tab.Navigator>
    );
}


export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MainTabs"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TripDetails"
                    component={TripDetailsScreen}
                    options={{
                        title: 'Detalhes da Viagem',
                        headerBackTitle: 'Voltar'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
