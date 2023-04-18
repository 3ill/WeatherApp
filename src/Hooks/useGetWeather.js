import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API } from "@env";

export const useGetWeather = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=44.39&lon=10.99&appid=${WEATHER_API}&uints=metric`
      );

      const data = await res.json();

      setWeather(data);
    } catch (e) {
      setError("Could not fetch weather");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      // let { status } = await Location.requestBackgroundPermissionsAsync;
      // if (status !== "granted") {
      //   setError("permission to access location was denied");
      //   return;
      // }
      // let location = await Location.getCurrentPositionAsync({});
      setLat("44.34");
      setLon("10.99");
      await fetchWeatherData();
    })();
  }, [lat, lon]);
  return [IsLoading, error, weather];
};
