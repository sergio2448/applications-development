import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';

const InputComponent = ({ items, setItems }) => {
  const [text, setText] = useState('');
  console.log('text', text);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Nombre"
      />
      <Icon.Button
        iconStyle={{
          margin: 0,
        }}
        name="pluscircleo"
        color="#FFF"
        backgroundColor="#29B6F6"
        onPress={() => setItems([...items, text])}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
});
