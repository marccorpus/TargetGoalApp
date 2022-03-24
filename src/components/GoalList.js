import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./GoalItem";

import sizes from "../utils/sizes";

const GoalList = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={goals}
        renderItem={(dataItem) => {
          return <GoalItem {...dataItem.item} onDeleteGoal={onDeleteGoal} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: sizes.md,
    flex: 1,
  },
});

export default GoalList;
