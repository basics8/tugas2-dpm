import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoListScreen from './screens/TodoListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
