import React from "react";
import { SafeAreaView, Text, ImageBackground, View } from "react-native";
import { cityBackground } from "../../assets";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import Icon from "../components/Icon";

const City = (weatherData) => {
  //! here we are destructuring the styles object to enhance code readability
  const {
    container,
    cityText,
    cityName,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    paddingTop,
    iconTheme,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView className={`${container}`}>
      <StatusBar style="auto" />
      <ImageBackground source={cityBackground} style={{ flex: 1 }}>
        <Text className={`${cityName} ${cityText}`}>{name}</Text>
        <Text className={`${countryName} ${cityText}`}>{country}</Text>

        <View className={`${populationWrapper}`}>
          <Icon
            name={`user`}
            color={`purple`}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
            wrapperStyle={iconTheme}
          />
        </View>

        <View className={`${riseSetWrapper}`}>
          <Icon
            name={`sunrise`}
            color={`white`}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
            wrapperStyle={iconTheme}
          />
          <Icon
            name={`sunset`}
            color={`white`}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
            wrapperStyle={iconTheme}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = {
  container: "flex-1 bg-purple-300",
  text: "font-bold text-2xl",
  cityName: " text-[30px] ",
  countryName: "text-[40px]",
  cityText: "justify-center  self-center font-bold text-white",
  populationWrapper: "flex-row items-center justify-center mt-[30px]",
  populationText: "text-[25px] ml-[7.5px] text-purple-300",
  riseSetWrapper: "flex-row items-center justify-around mt-[30px]",
  riseSetText: "text-[20px] text-white",
  iconTheme: "items-center justify-around",
  paddingTop: StatusBar.currentHeight || 0,
};
export default City;
