import React from "react";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/weatherType";
import { background } from "../../assets";

const CurrentWeather = ({ weatherData }) => {
  const {
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    wrapper,
    tempStyle,
    feels,
    containerStyles,
    paddingTop,
    backgroundColor,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={{
        paddingTop: paddingTop,
        backgroundColor: WeatherType[weatherCondition]?.backgroundColor,
      }}
      className={`${wrapper}`}
    >
      <View className={`${containerStyles}  `}>
        <Feather
          name={WeatherType[weatherCondition].icon}
          size={100}
          color={`white`}
        />
        <Text className={`${tempStyle}`}>{temp}</Text>
        <Text className={`${feels}`}>{`Feels like ${feels_like}`}</Text>

        <RowText
          Text1={`High: ${temp_max} `}
          Text2={` Low: ${temp_min}`}
          viewStyles={highLowWrapper}
          textStyle1={highLow}
          textStyle2={highLow}
        />
      </View>

      <RowText
        Text1={weather[0]?.description}
        Text2={WeatherType[weatherCondition]?.message}
        viewStyles={bodyWrapper}
        textStyle1={description}
        textStyle2={message}
      />
    </SafeAreaView>
  );
};

const styles = {
  containerStyles: "flex-1 items-center justify-center",
  wrapper: "flex-1 bg-gray-500",
  tempStyle: "text-[48px] text-white",
  feels: "text-[30px] text-white",
  highLow: "text-white text-[20px]",
  highLowWrapper: "flex-row",
  bodyWrapper: "justify-items-end flex-start pl-[25px] mb-[40px]",
  description: "text-[40px] text-white",
  message: "text-[25px] text-white",
  paddingTop: StatusBar.currentHeight || 0,
};

export default CurrentWeather;
