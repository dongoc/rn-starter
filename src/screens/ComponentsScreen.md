# React Component File 
- Textcontent for user
- component files create and export exactly one react component

<hr> 

## Part1 : **IMPORT** libraries we need to create a component
```js
import React from 'react' // how different components work together
import { Text, StyleSheet } from 'react-native' // show screen
```
'Text' is a 'primitive React' element. used to show some basic content on the screen
- primitive element
  - Text : show some **text** to the user. any text placed outside of a 'Text' will result in an **error**.
  - Views : General purpose element used for **grouping** other elements or styling
  - Image : Show and image
  - Button L Show a button the user can press. Gives us some feedback whenever the user presses it.

<hr>

## Part2 : create a **component** (a function that returns some 'JSX(what we would show on screen)
```js
const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>this is the components screen</Text>;
};
```

### Rules of JSX
- We can **assemble** different JSX elements like normal HTML
```js
import { Text, StyleSheet, view } from 'react-native' // show screen

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>this is the origin</Text>
      <Text>Hi there!</Text>
    </View>
  );
};
```
- We **configure** different JSX elements using 'props'
```js
return <Text style={styles.textStyle}>this style prop!</Text>

```
- We can **refer to JS variables** inside of JSX block by using curly braces
```js
const ComponentsScreen = () => {
  const greeting = 'Bye There!'
  const array = [123, 456]
  // object는 적용되지 않음
  return (
    <Text>{greeting}</Text>
    <Text>{array}</Text> //123456으로 표시됨
  );
};
```
- We can **assign JSX elements to a variable**, then show that variable inside of a JSX block
```js
const ComponentsScreen = () => {
  const greeting = <Text>'Bye There!'</Text>
  return {greeting}
};
```

<hr>

## Part3 : create a **stylesheet** to style our component
```js
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})
```
styles : the 'StyleSheet.create()' function validates a set of styling rules that we pass into it. We can use it or pass styling directly into and element.

### Inline style version
```js
const ComponentsScreen = () => {
  return <Text style={{ fontSize: 30 }}>this is the components screen</Text>;
};
```

<hr>

## Part4 : **EXPORT** the component so we can use it elsewhere in our project
```js
export default ComponentsScreen;
```




