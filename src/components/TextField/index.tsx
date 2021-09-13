import React, { useRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import { isIOS } from "../../utility";
import Color from "../../utility/Color";

const styles = StyleSheet.create({
  input: {
    color: Color.steelBlue,
    textDecorationLine: "none",
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  inputMaterial: { borderWidth: 0 },
  inputIOS: {
    borderBottomWidth: 1,
    borderBottomColor: Color.lightSteelBlue,
  },
});

const TextField = (prop: any) => {
  return (
    <TextInput
      underlineColorAndroid={Color.steelBlue}
      autoCorrect={false}
      autoCapitalize="none"
      style={
        isIOS()
          ? { ...styles.input, ...styles.inputIOS }
          : { ...styles.input, ...styles.inputMaterial }
      }
      placeholderTextColor={Color.lightSteelBlue}
      placeholder={prop.placeholder}
      keyboardType={prop.keyboardType}
      value={prop.value}
      {...prop}
    />
  );
};

export default TextField;
