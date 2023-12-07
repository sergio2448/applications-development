import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const ItemComponent = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.buttonsContainer}>
        <Icon.Button
          iconStyle={{
            margin: 0,
          }}
          name="checkcircleo"
          color="green"
          backgroundColor="#FAFAFA"
          onPress={() => Alert.alert('Button example')}
        />
        <Icon.Button
          iconStyle={{
            margin: 0,
          }}
          name="closecircleo"
          color="red"
          backgroundColor="#FAFAFA"
          onPress={() => Alert.alert('Button example')}
        />
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
  },
  text: {
    display: 'flex',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  red: {
    backgroundColor: 'red',
  },
});
