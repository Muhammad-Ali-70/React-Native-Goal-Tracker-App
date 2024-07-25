import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/Goal_Item";
import GoalInputComponent from "./components/Goal_Input";

export default function App() {
  const [courseGoals, SetCourseGoals] = useState([]);

  function AddButtonGoalText(enteredText) {
    // SetCourseGoals([... courseGoals,AddGoalText]);
    
    SetCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, indexNumber: Math.random().toString() },
    ]);
  }

  function DeleteGoalHandler(ParameterID) {
    SetCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) =>  goal.indexNumber !== ParameterID );
    });
  }

  return (
    <View style={styles.appcontainer}>
      <GoalInputComponent AddGoal={AddButtonGoalText} />
      <View style={styles.goalListContainer}>
        <Text style={styles.headingtext}>List of Goals</Text>
        <FlatList
          data={courseGoals}
          renderItem={(EachItem) => {
            return (
              <GoalItem
                PassedText={EachItem.item.text}
                OnDelete={DeleteGoalHandler}
                passedID={EachItem.item.indexNumber}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.indexNumber;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    backgroundColor: "#e4e4e4",
    paddingTop: 50,
    paddingHorizontal: 18,
  },
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
  goalListContainer: {
    flex: 6,
  },

  headingtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
