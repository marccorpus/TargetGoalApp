import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../utils/colors";
import sizes from "../utils/sizes";

const Button = ({ type, text, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, styles[type]]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.xsm,
    padding: sizes.md,
  },
  text: {
    color: colors.darkGrey,
    fontWeight: "700",
    fontSize: sizes.md,
    textAlign: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
});
