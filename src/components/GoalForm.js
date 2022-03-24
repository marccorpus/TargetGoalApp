import { useState } from "react";
import { StyleSheet, Modal, Image, View, TextInput } from "react-native";

import Button from "../common/Button";

import colors from "../utils/colors";
import sizes from "../utils/sizes";

const GoalForm = ({ showModal, onAdd, onCancel }) => {
  const [goal, setGoal] = useState("");

  const cancelHandler = () => {
    onCancel();
    setGoal("");
  };

  const addHandler = () => {
    if (goal.trim().length > 0) {
      onAdd(goal);
      setGoal("");
    }
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.formContainer}>
        <Image
          source={require("../../assets/images/goal.png")}
          style={styles.logo}
        />
        <TextInput
          placeholder="Enter your goal"
          placeholderTextColor="#ffffff"
          style={styles.input}
          autoFocus={true}
          value={goal}
          onChangeText={(value) => setGoal(value)}
        />
        <View style={styles.actionContainer}>
          <View style={styles.button}>
            <Button type="secondary" text="Cancel" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button type="primary" text="Add" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
    paddingHorizontal: sizes.md,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    padding: sizes.md,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: sizes.xsm,
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: "700",
    width: "100%",
    marginVertical: sizes.sm,
  },
  actionContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: sizes.sm,
  },
});
