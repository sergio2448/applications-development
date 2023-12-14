import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import InputComponent from './InputComponent';
import ModalComponent from './ModalComponent';
import FlatListComponent from './FlatListComponent';

const HomeComponent = ({ onTaskSelected }) => {
  const [items, setItems] = useState(['Entrega Coder']);
  const itemsProps = {
    items,
    setItems,
    onTaskSelected,
  };
  return (
    <View>
      <InputComponent {...itemsProps} />
      <FlatListComponent {...itemsProps} />
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({});
