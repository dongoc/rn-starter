import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    // key는 문자열이어야 하고 유니크한 값이어야 한다.
    { name: 'Friend #1', key: '1' },
    { name: 'Friend #2', key: '2' },
    { name: 'Friend #3', key: '3' },
    { name: 'Friend #4', key: '4' },
    { name: 'Friend #5', key: '5' },
    { name: 'Friend #6', key: '6' },
    { name: 'Friend #7', key: '7' },
    { name: 'Friend #8', key: '8' },
    { name: 'Friend #9', key: '9' }
  ];
  return (
    <FlatList 
      data={friends} 
      // renderItem={(element) => {
      //   // element === {item: {name: 'Friend #1', index: 0}}
      // }}
      renderItem={({item}) => {
        return <text>{item.name}</text>;
      }}
    />
  );
}

const styles = StyleSheet.create({

})

export default ListScreen;