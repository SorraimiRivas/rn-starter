import React from "react";
import { View, Text, Button } from "react-native";

const ColorCounter = ({ color, onIncrement, onDecrement }) => {
  return (
    /* "title" expects a string, but.
    can also do `Increase ${color}` as string interpolation instead.
    {"More " + color} works just as well and it is easier to infer*/
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrement()} title={"Increase " + color} />
      <Button onPress={() => onDecrement()} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;
