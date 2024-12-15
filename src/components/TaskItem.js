import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TaskItem = ({ task, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task}</Text>
      <Button title="Delete" color="#d9534f" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
});

export default TaskItem;
