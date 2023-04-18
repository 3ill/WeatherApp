import * as Location from "expo-location";
import { WEATHER_API } from "@env";

const getWeather = async () => {
  const location = await Location.getCurrentPositionAsync({});
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;

  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API}`
  );

  const data = res.json();
  console.log("🚀 ~ file: Fetch.js:14 ~ getWeather ~ data:", data);
};

getWeather();
