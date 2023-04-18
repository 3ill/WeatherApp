import React from "react";
import CurrentWeather from "../Screens/CurrentWeather";
import UpcomingWeather from "../Screens/UpcomingWeather";
import City from "../Screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

/**
 * ! This function handles Routing and The Bottom Navbar
 * ? screenOptions sets the the bottom tab color palettes
 * ? tabBarIcon renders the icon you want at the navbar
 *
 */

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#cad2c5",
        },
        headerStyle: {
          backgroundColor: "#cad2c5",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "white",
        },
      }}
    >
      <Tab.Screen
        name={`Current Weather`}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={`Upcoming Weather`}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
