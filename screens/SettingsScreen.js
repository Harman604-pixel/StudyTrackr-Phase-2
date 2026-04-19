import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Customize StudyTrackr for your study routine.</Text>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Preferences</Text>
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Enable a low-light interface for evening study sessions.</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} thumbColor="#4F46E5" />
        </View>
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Notifications</Text>
            <Text style={styles.settingDescription}>Receive reminders for upcoming deadlines and tasks.</Text>
          </View>
          <Switch value={notifications} onValueChange={setNotifications} thumbColor="#4F46E5" />
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Support</Text>
        <Text style={styles.note}>Need help? Contact the team at studytrackr@hotmail.com.</Text>
      </View>

      <CustomButton label="Save Preferences" onPress={() => {}} />
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 22,
  },
  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  panelTitle: {
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
    fontSize: 16,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  settingInfo: {
    flex: 1,
    marginRight: 12,
  },
  settingLabel: {
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  settingDescription: {
    color: '#6B7280',
    lineHeight: 20,
  },
  note: {
    color: '#4B5563',
    lineHeight: 22,
  },
});
