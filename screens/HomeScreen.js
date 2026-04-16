import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation, quote }) {
  const tasks = useSelector(state => state.tasks.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressValue = tasks.length ? completedTasks / tasks.length : 0;

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tag}>StudyTrackr</Text>
        <Text style={styles.greeting}>Welcome back, Denzel</Text>
        <Text style={styles.subtitle}>Organize your study tasks and stay on top of every deadline.</Text>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Today's Progress</Text>
          <Text style={styles.progressLabel}>{Math.round(progressValue * 100)}%</Text>
        </View>
        <Text style={styles.cardSubtitle}>{completedTasks} of {tasks.length} tasks completed</Text>
        <ProgressBar value={progressValue} />
      </View>

      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>&ldquo;{quote.text}&rdquo;</Text>
        <Text style={styles.quoteAuthor}>- {quote.author}</Text>
      </View>

      <View style={styles.taskHeaderRow}>
        <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
        <CustomButton label="Add Task" onPress={() => navigation.navigate('Add Task')} style={styles.addButton} color="#2563EB" />
      </View>

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onPress={() => navigation.navigate('Task Details', { taskId: task.id })}
        />
      ))}

      <View style={styles.bottomRow}>
        <CustomButton label="Progress" onPress={() => navigation.navigate('Progress')} style={styles.bottomButton} color="#0F766E" />
        <CustomButton label="Settings" onPress={() => navigation.navigate('Settings')} style={styles.bottomButton} color="#7C3AED" />
      </View>
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
    marginBottom: 24,
  },
  tag: {
    color: '#2563EB',
    fontWeight: '800',
    marginBottom: 8,
    fontSize: 14,
    letterSpacing: 1,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    marginTop: 10,
    color: '#4B5563',
    fontSize: 16,
    lineHeight: 24,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 22,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  progressLabel: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563EB',
  },
  cardSubtitle: {
    color: '#6B7280',
    marginBottom: 16,
    fontWeight: '600',
  },
  quoteCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 22,
  },
  quoteText: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
    color: '#1F2937',
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4338CA',
  },
  taskHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },
  addButton: {
    minWidth: 110,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  bottomButton: {
    flex: 1,
    marginHorizontal: 6,
  },
});
