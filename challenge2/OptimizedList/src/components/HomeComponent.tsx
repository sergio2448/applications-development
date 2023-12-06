import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import InputComponent from './InputComponent';
import ModalComponent from './ModalComponent';
import FlatListComponent from './FlatListComponent';

const HomeComponent = () => {
  return (
    <View>
      <Text>HomeComponent</Text>
      <InputComponent />
      <ModalComponent />
      <FlatListComponent />
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({});
