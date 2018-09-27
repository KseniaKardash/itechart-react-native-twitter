import React from "react";
import { TouchableHighlight, StyleSheet, Text } from "react-native";

const Button = (props: Props) => {
  const { text, onPress } = props;
  return (
    <TouchableHighlight style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  );
};
export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ff5d39",
    margin: 5,
    padding: 5,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18,
    padding: 5
  }
});
