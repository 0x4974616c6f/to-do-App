import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Task 1', completed: false },
    { id: '2', text: 'Task 2', completed: false },
  ]);

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <Checkbox
        status={item.completed ? 'checked' : 'unchecked'}
        onPress={() => toggleTaskCompletion(item.id)}
      />
      <Text
        style={[
          styles.taskText,
          { textDecorationLine: item.completed ? 'line-through' : 'none' },
        ]}
      >
        {item.text}
      </Text>
      <Button title="X" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask', { tasks, setTasks })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});

