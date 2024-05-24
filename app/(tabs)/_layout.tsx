import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => {
        console.log('Route name:', route.name); // Debug log
        return {
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            display: route.name === 'Login' || route.name === 'Register' ? 'none' : 'flex',
          },
        };
      }}
    >
      <Tabs.Screen
        name="MainPage"
        options={{
          title: 'Main Page',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarButton: () => null, // Hide tab button
        }}
      />
      <Tabs.Screen
        name="Register"
        options={{
          title: 'Register',
          tabBarButton: () => null, // Hide tab button
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="piechart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="HomeRooms"
        options={{
          title: 'Home Rooms',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="bed" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
