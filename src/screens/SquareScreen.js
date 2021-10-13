import React, { useReducer } from "react";
import { View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_PAYLOAD = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, {
    red: 0, green: 0, blue: 0
  });

  const { red, green, blue } = state;

  return (
    <View>
      <View style={{ padding: 15 }}>
        <ColorCounter
          color="Red"
          onIncrement={() => dispatch({ type: "change_red", payload: COLOR_PAYLOAD })}
          onDecrement={() => dispatch({ type: "change_red", payload: -1 * COLOR_PAYLOAD })}
        />
      </View>
      <View style={{ padding: 15 }}>
        <ColorCounter
          color="Green"
          onIncrement={() => dispatch({ type: "change_green", payload: COLOR_PAYLOAD })}
          onDecrement={() => dispatch({ type: "change_green", payload: -1 * COLOR_PAYLOAD })}
        />
      </View>
      <View style={{ padding: 15 }}>
        <ColorCounter
          color="Blue"
          onIncrement={() => dispatch({ type: "change_blue", payload: COLOR_PAYLOAD })}
          onDecrement={() => dispatch({ type: "change_blue", payload: -1 * COLOR_PAYLOAD })}
        />
      </View>
      <View
        style={{
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: `rgb(${red},${green},${blue})`,
          }}
        ></View>
        <Text style={{ color: "red" }}>Red {red}</Text>
        <Text style={{ color: "green" }}>Green {green}</Text>
        <Text style={{ color: "blue" }}>Blue {blue}</Text>
      </View>
    </View>
  );
};

export default SquareScreen;
