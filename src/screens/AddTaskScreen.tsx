import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface AddTaskScreenProps {
  navigation: any;
  route: {
    params: {
      tasks: Task[];
      setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    };
  };
}

export default function AddTaskScreen({
  navigation,
  route,
}: AddTaskScreenProps) {
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.length > 0) {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9),
        text: taskText,
        completed: false,
      };
      route.params.setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Task</Text>
      <TextInput
        style={styles.input}
        value={taskText}
        onChangeText={setTaskText}
        placeholder="Enter task"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#64b5f6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

