import { Alert, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import ProgressBar from '../components/ProgressBar';
import { deleteTask, toggleTask } from '../redux/taskSlice';

export default function TaskDetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const task = useSelector(state =>
    state.tasks.tasks.find(item => item.id === route.params?.taskId)
  );

  if (!task) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Task not found.</Text>
      </View>
    );
  }

  const handleToggleCompleted = () => {
    dispatch(toggleTask(task.id));
    Alert.alert('Update saved', `Task marked as ${!task.completed ? 'completed' : 'incomplete'}.`);
  };

  const handleDelete = () => {
    Alert.alert('Delete task', 'Are you sure you want to remove this task?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteTask(task.id));
          navigation.goBack();
        }
      }
    ]);
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.tagRow}>
        <Text style={styles.tag}>{task.subject}</Text>
        <Text style={styles.dateText}>{task.dueDate}</Text>
      </View>
      <Text style={styles.description}>{task.description}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Task progress</Text>
        <ProgressBar value={task.progress / 100} />
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>{task.completed ? 'Completed' : 'In progress'}</Text>
          <Switch
            value={task.completed}
            onValueChange={handleToggleCompleted}
            thumbColor="#4F46E5"
          />
        </View>
      </View>

      <CustomButton label="Delete Task" onPress={handleDelete} style={styles.deleteButton} color="#DC2626" />
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  tag: {
    backgroundColor: '#E0E7FF',
    color: '#3730A3',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    fontWeight: '700',
  },
  dateText: {
    color: '#6B7280',
    fontWeight: '700',
  },
  description: {
    color: '#374151',
    lineHeight: 22,
    fontSize: 16,
    marginBottom: 28,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  toggleLabel: {
    color: '#4B5563',
    fontWeight: '700',
  },
  deleteButton: {
    marginTop: 6,
  },
});
