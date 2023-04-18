import React from "react";
import { View, Text } from "react-native-web";
import { Feather } from "@expo/vector-icons";

const ErrorItem = () => {
  const { container, errorMessage } = styles;
  return (
    <view className={`${container}`}>
      <Text className={`${errorMessage}`}>Sorry Something Went Wrong!</Text>
      <Feather name="frown" size={100} color={`#e5e5e5`} />
    </view>
  );
};

const styles = {
  container: "flex-1 bg-[#e63946] justify-center items-center",
  errorMessage: "text-[30px] text-white mx-[10px] ",
};

export default ErrorItem;
