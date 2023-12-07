import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ItemComponent from './ItemComponent';

const FlatListComponent = ({ items, setItems }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>TASKS</Text>
        <Text style={styles.subTitle}>Better done than perfect</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemComponent title={item} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
});
