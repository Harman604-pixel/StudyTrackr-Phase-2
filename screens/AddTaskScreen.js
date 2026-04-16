import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import CustomButton from '../components/CustomButton';

export default function AddTaskScreen({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [details, setDetails] = useState('');

  const handleSave = () => {
    if (!title || !subject || !dueDate) {
      Alert.alert('Missing details', 'Please fill in the task name, subject, and due date.');
      return;
    }

    dispatch(addTask({
      id: Date.now().toString(),
      title,
      subject,
      dueDate,
      description: details || 'No additional notes added.',
      progress: 0,
      completed: false
    }));

    navigation.goBack();
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add a new task</Text>
      <Text style={styles.label}>Task name</Text>
      <TextInput style={styles.input} placeholder="e.g. Finish Chemistry notes" value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Subject</Text>
      <TextInput style={styles.input} placeholder="e.g. Biology" value={subject} onChangeText={setSubject} />

      <Text style={styles.label}>Due date</Text>
      <Text style={styles.input} placeholder="YYYY-MM-DD" value={dueDate} onChangeText={setDueDate} />

      <Text style={styles.label}>Task details</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Optional notes about the task"
        multiline
        numberOfLines={4}
        value={details}
        onChangeText={setDetails}
      />

      <CustomButton label="Save Task" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 24,
  },
  label: {
    color: '#374151',
    marginBottom: 8,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    color: '#111827',
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
});
