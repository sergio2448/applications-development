import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ItemComponent from './ItemComponent';
import ModalComponent from './ModalComponent';

const FlatListComponent = ({ items, setItems, onTaskSelected }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>TASKS</Text>
        <Text style={styles.subTitle}>Better done than perfect</Text>
      </View>

      <FlatList
        data={items}
        renderItem={(item) => {
          const propsItem = {
            id,
            item,
            items,
            setItems,
            modalVisible,
            setModalVisible,
            onTaskSelected,
          };
          return <ItemComponent {...propsItem} />;
        }}
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
