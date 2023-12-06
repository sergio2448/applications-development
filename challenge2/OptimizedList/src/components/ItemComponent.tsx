import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import InputComponent from './InputComponent';

const ItemComponent = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title="+" onPress={() => Alert.alert('Button example')} />
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});
