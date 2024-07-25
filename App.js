import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [AddGoalText, SetGoalText] = useState("");
  const [courseGoals, SetCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    SetGoalText(enteredText);
  }

  function AddButtonGoalText() {
    // SetCourseGoals([... courseGoals,AddGoalText]);
    SetCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: AddGoalText, Indexnumber: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputAreaView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button
          title="Add Goal"
          color="#503af7"
          onPress={AddButtonGoalText}
        ></Button>
      </View>
      <View style={styles.goalListContainer}>
        <Text style={styles.headingtext}>List of Goals</Text>
        <FlatList
          data={courseGoals}
          renderItem={(EachItem) => {
            return (
              <View>
                <View style={styles.goalItem}>
                  <Text style={styles.goaltext}>{EachItem.item.text}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item,Indexnumber)=>{
            return item.Indexnumber
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
  headingtext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
