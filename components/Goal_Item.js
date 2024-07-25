import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.OnDelete.bind(this, props.passedID)}>
      <View style={styles.goalItem}>
        <Text style={styles.goaltext}>{props.PassedText}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    width: "96%",
    marginVertical: 8,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#503af7",
    alignItems: "baseline",
  },
  goaltext: {
    color: "white",
    fontSize: 18,
  },
});
