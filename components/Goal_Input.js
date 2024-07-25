import { StyleSheet, View, TextInput,Button } from "react-native";
import { useState } from "react";

export default function GoalInputComponent(props) {
  const [AddGoalText, SetGoalText] = useState("");

  function goalInputHandler(enteredText) {
    SetGoalText(enteredText);
  }

  function AddgoalTextHandler(){
    props.AddGoal(AddGoalText)
    SetGoalText('')
  }

  return (
    <View style={styles.inputAreaView}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Goal"
        onChangeText={goalInputHandler}
        value={AddGoalText}
      ></TextInput>
      <Button title="Add Goal" color="#503af7" onPress={AddgoalTextHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputAreaView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 10,
    padding: 7,
    fontSize: 16,
  },
});
