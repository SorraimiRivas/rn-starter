import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => navigation.navigate("Components")}
          title="Go to Components Demo"
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate("List")}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => navigation.navigate("Image")}
          title="Go to Image Demo"
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => navigation.navigate("Counter")}
          title="Go to Counter Demo"
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => navigation.navigate("Square")}
          title="Go to Square Demo"
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          onPress={() => navigation.navigate("Text")}
          title="Go to Text Demo"
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
