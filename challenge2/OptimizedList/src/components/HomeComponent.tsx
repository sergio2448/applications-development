import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import InputComponent from './InputComponent';
import ModalComponent from './ModalComponent';
import FlatListComponent from './FlatListComponent';

const HomeComponent = () => {
  const [items, setItems] = useState(['Entrega Coder']);
  const itemsProps = {
    items,
    setItems,
  };
  return (
    <View>
      <InputComponent {...itemsProps} />
      <ModalComponent />
      <FlatListComponent {...itemsProps} />
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({});
