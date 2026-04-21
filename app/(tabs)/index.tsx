import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') {
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks, { id: Date.now().toString(), title: task, completed: false }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        StudyTrackr App
      </Text>

      <Text>Total Tasks: {tasks.length}</Text>

      <TextInput
        placeholder="Enter your task..."
        value={task}
        onChangeText={setTask}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          marginVertical: 10
        }}
      />

      <Button title="Add Task" onPress={addTask} />

      {tasks.length === 0 && (
        <Text style={{ marginTop: 20 }}>No tasks yet</Text>
      )}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            backgroundColor: '#f2f2f2',
            padding: 10,
            borderRadius: 8
          }}>
            <Text style={{
              flex: 1,
              textDecorationLine: item.completed ? 'line-through' : 'none'
            }}>
              {item.title}
            </Text>

            <Button title="Done" onPress={() => toggleTask(item.id)} />
            <Button title="Delete" onPress={() => deleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
}