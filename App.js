import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';
import ProgressScreen from './screens/ProgressScreen';
import SettingsScreen from './screens/SettingsScreen';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  const quote = {
    text: 'Stay focused and keep moving forward.',
    author: 'StudyTrackr'
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} quote={quote} />}
          </Stack.Screen>
          <Stack.Screen name="Add Task" component={AddTaskScreen} />
          <Stack.Screen name="Task Details" component={TaskDetailsScreen} />
          <Stack.Screen name="Progress" component={ProgressScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
