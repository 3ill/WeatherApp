import React, { useState, useEffect } from "react";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/Hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const { container } = styles;
  const [IsLoading, error, weather] = useGetWeather();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View className={`${container}`}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={`large`} color={`#264653`} />
      )}
    </View>
  );
};

const styles = {
  container: "flex-1 justify-center items-center bg-[#f1faee]",
};

export default App;
