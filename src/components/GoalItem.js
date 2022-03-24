import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../utils/colors";
import sizes from "../utils/sizes";

const GoalItem = ({ id, text, onDeleteGoal }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onDeleteGoal(id)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.success,
    borderRadius: sizes.xsm,
    padding: sizes.md,
    marginBottom: sizes.sm,
  },
});
