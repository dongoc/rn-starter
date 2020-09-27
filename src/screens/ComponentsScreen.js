// react component file : content for user
// component files create and export exactly one react component

// part1 **IMPORT** libraries we need to create a component
// part2 create a **component** (a function that returns some 'JSX(what we would show on screen)')
// part3 create a **stylesheet** to style our component
// part4 **EXPORT** the component so we can use it elsewhere in our project

// SECTION part1 **IMPORT** libraries we need to create a component
import React from 'react' // how different components work together
import { Text, StyleSheet } from 'react-native' // show screen

// SECTION part2 create a **component** (a function that returns some 'JSX(what we would show on screen)')
const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>this is the components screen</Text>;
};

// SECTION part3 create a **stylesheet** to style our component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

// SECTION part4 **EXPORT** the component so we can use it elsewhere in our project
export default ComponentsScreen;