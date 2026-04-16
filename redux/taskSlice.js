import { createSlice } from '@reduxjs/toolkit';
import { initialTasks } from '../data/mockTasks';

const initialState = {
  tasks: initialTasks
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    }
  }
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
