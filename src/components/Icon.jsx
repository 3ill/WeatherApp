import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const Icon = (props) => {
  const { name, bodyText, color, bodyTextStyles, wrapperStyle } = props;
  const { textTheme } = styles;
  return (
    <View className={`${wrapperStyle}`}>
      <Feather name={name} size={50} color={color} />
      <Text className={`${textTheme} ${bodyTextStyles}`}>{bodyText}</Text>
    </View>
  );
};

const styles = {
  textTheme: "font-bold",
};

export default Icon;
