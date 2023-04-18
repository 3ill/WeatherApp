import React from "react";
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { Thrill, background } from "../../assets";
import ListItem from "../components/List";

/**
 * TODO: Move the styles object into it's own file and import
 */

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  //! We are destructuring the styles to improve code readability
  const { container, image, text } = styles;

  return (
    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight || 0 }}
      className={`${container}`}
    >
      <ImageBackground source={background} className={`${image}`}>
        <Image
          source={Thrill}
          style={{ height: 100, width: 100 }}
          className={`ml-[40%]`}
        />

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = {
  container: "flex-1 bg-red-400",
  item: "p-[20px] my-[8px] mx-[16px] flex-row justify-around align-center border-[3px] rounded-md shadow-sm bg-gray-500 border-white",
  temp: "text-[20px]",
  date: "text-[15px]",
  image: "flex-1",
  text: "text-white",
};

export default UpcomingWeather;
