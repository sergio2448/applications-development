import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TaskDetail = ({ taskId }: { taskId: number }) => {
  return (
    <View>
      <Text>{taskId}</Text>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({});
