import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { WeatherType } from "../utilities/weatherType";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, dateTextWrapper } = styles;

  return (
    <View className={`${item}`}>
      <Feather name={WeatherType[condition].icon} size={50} color={`white`} />
      <View className={`${dateTextWrapper}`}>
        <Text>{moment(dt_txt).format("dddd")}</Text>
        <Text>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text className={`${temp}`}>{`${Math.round(min)}/ ${Math.round(
        max
      )}`}</Text>
    </View>
  );
};

const styles = {
  container: "flex-1 bg-red-400",
  item: "p-[20px] my-[8px] mx-[16px] flex-row justify-around align-center border-[3px] rounded-md shadow-sm bg-gray-500 border-white",
  temp: "text-[20px]",
  date: "text-[15px]",
  background: "flex-1",
  text: "text-white",
  dateTextWrapper: "flex-col",
};

export default ListItem;
