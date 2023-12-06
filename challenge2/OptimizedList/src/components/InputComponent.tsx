import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputComponent = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>InputComponent</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Nombre"
      />
      <Button title="Press me" />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
