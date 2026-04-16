import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ProgressBar from '../components/ProgressBar';

export default function ProgressScreen() {
  const tasks = useSelector(state => state.tasks.tasks);
  const progressValue = tasks.length ? tasks.filter(task => task.completed).length / tasks.length : 0;
  const sortedTasks = [...tasks].sort((a, b) => b.progress - a.progress);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Progress Dashboard</Text>
      <Text style={styles.subtitle}>Visualize how your study tasks are moving forward.</Text>

      <View style={styles.overviewCard}>
        <Text style={styles.cardLabel}>Overall completion</Text>
        <Text style={styles.cardNumber}>{Math.round(progressValue * 100)}%</Text>
        <ProgressBar value={progressValue} />
      </View>

      <Text style={styles.listTitle}>Task progress breakdown</Text>
      {sortedTasks.map(task => (
        <View key={task.id} style={styles.taskRow}>
          <View>
            <Text style={styles.taskName}>{task.title}</Text>
            <Text style={styles.taskSubject}>{task.subject}</Text>
          </View>
          <Text style={styles.taskValue}>{task.progress}%</Text>
          <ProgressBar value={task.progress / 100} />
        </View>
      ))}

      <Text style={styles.note}>Use Home to add tasks, then mark them complete when you finish studying.</Text>
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
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 16,
    marginBottom: 20,
  },
  overviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: 20,
    marginBottom: 22,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  cardLabel: {
    color: '#4B5563',
    fontWeight: '700',
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 16,
    color: '#111827',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 16,
    color: '#111827',
  },
  taskRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  taskName: {
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  taskSubject: {
    color: '#6B7280',
  },
  taskValue: {
    position: 'absolute',
    right: 18,
    top: 18,
    color: '#2563EB',
    fontWeight: '800',
  },
  note: {
    color: '#6B7280',
    marginTop: 14,
    lineHeight: 22,
  },
});
