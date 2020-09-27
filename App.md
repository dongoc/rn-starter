### What is that 'appNavigator' in the 'App.js' file?
```js
const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Components: ComponentsScreen
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);
```
It's a tool from a library called 'React Navigation' that is used to show **different screens** to the user.