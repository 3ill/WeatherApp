import React, { useState, useEffect } from "react";
import { View, Text, Button, SafeAreaView, StatusBar } from "react-native";

const Counter = () => {
  const { container, title, button } = styles;
  const [Count, setCount] = useState(0);
  const [NewCount, setNewCount] = useState(0);
  useEffect(() => {
    console.log(`Counts changed`);
  }, [Count, NewCount]);

  return (
    <SafeAreaView
      className={`${container}`}
      style={{ paddingTop: StatusBar.currentHeight || 0 }}
    >
      <Text className={`${title}`}>{`count: ${Count}`}</Text>
      <Button
        color={`red`}
        title="Increase the count"
        onPress={() => {
          setCount(Count + 1);
        }}
      />

      <Button
        color={`green`}
        title="Decrease the count"
        onPress={() => {
          setCount(Count - 1);
        }}
      />

      <Button
        color={`red`}
        title="Increase the count"
        onPress={() => {
          setNewCount(Count + 1);
        }}
      />

      <Button
        color={`green`}
        title="Decrease the count"
        onPress={() => {
          setNewCount(Count - 1);
        }}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: "flex-1 bg-orange-300",
  title: "self-center text-[25px] mt-[25px] mb-[25px] ",
};

export default Counter;
