import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [AddGoalText,SetGoalText]=useState('');
  const [courseGoals,SetCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    SetGoalText(enteredText)
  }

  function AddButtonGoalText(){
    // SetCourseGoals([... courseGoals,AddGoalText]);
    SetCourseGoals(currentCourseGoals => [... currentCourseGoals,AddGoalText]);
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputAreaView}>
        <TextInput style={styles.textInput} placeholder='Enter Your Goal' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' color="green" onPress={AddButtonGoalText} ></Button>
      </View>
      <View style={styles.goalListContainer}>
        <Text>List of Goals for My Project</Text>
        <View>{courseGoals.map((eachgoal)=> <Text style={styles.goalItem} key={eachgoal}>{eachgoal}</Text>)}</View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  goalListContainer: {
    flex: 6
  },
  goalItem:{
    marginVertical:8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#503af7",
    color: "white",
    fontSize: 18
  }

});