import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import Button from "./src/common/Button";
import GoalList from "./src/components/GoalList";
import GoalForm from "./src/components/GoalForm";

import colors from "./src/utils/colors";
import sizes from "./src/utils/sizes";

export default function App() {
  const [goals, setGoals] = useState([
    {
      id: Math.random().toString(),
      text: "Learn React Native",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const addGoal = (text) => {
    const newGoal = { id: Math.random().toString(), text };

    setGoals((prevGoals) => [...prevGoals, newGoal]);

    toggleModal();
  };

  const deleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((prevGoal) => prevGoal.id !== id));
  };

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <>
      <ExpoStatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button type="primary" text="Add New Goal" onPress={toggleModal} />
        </View>
        <GoalList goals={goals} onDeleteGoal={deleteGoal} />
        <GoalForm
          showModal={showModal}
          onAdd={addGoal}
          onCancel={toggleModal}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  buttonContainer: {
    marginBottom: sizes.lg,
    paddingHorizontal: sizes.md,
  },
});
