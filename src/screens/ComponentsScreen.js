// SECTION part1 **IMPORT** libraries we need to create a component
import React from 'react' // how different components work together
import { Text, StyleSheet, View } from 'react-native' // show screen


// SECTION part2 create a **component** (a function that returns some 'JSX(what we would show on screen)')
const ComponentsScreen = () => {
  const name = 'Hailey'
  return (
    // 2개 이상의 element를 넣을 때는 반드시 View 
    <View>
      <Text style={styles.textStyle}>Getting Started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}!</Text>
    </View>
  );
};

// SECTION part3 create a **stylesheet** to style our component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
})

// SECTION part4 **EXPORT** the component so we can use it elsewhere in our project
export default ComponentsScreen;