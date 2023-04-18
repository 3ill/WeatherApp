import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const { Text1, Text2, viewStyles, textStyle1, textStyle2 } = props;
  return (
    <View className={`${viewStyles}`}>
      <Text className={`${textStyle1}`}>{Text1}</Text>
      <Text className={`${textStyle2}`}>{Text2}</Text>
    </View>
  );
};

export default RowText;
