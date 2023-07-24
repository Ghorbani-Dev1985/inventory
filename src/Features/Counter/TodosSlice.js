import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


// Get data
export const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos" , async (_, {rejectWithValue}) => {
  try {
  const response = await axios.get('http://localhost:3001/todoss'); 
  return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Post data
export const addAsyncTodos = createAsyncThunk("todos/addAsyncTodos" , async (payload, {rejectWithValue}) => {
  try {
  const response = await axios.post('http://localhost:3001/todos' , {
    id: Date.now(),
    title: payload.title,
    completed : false
  });
  return response.data;
  } catch (error) {
    return rejectWithValue([] , error);
  }
});


// Toggle Complete todo
export const toggleCompleteAsyncTodos = createAsyncThunk("todos/toggleCompleteAsyncTodos" , async (payload, {rejectWithValue}) => {
  try {
  const response = await axios.put(`http://localhost:3001/todos/${payload.id}` , {
   title: payload.title,
   completed : payload.completed,
  });
  return response.data;
  } catch (error) {
    return rejectWithValue([] , error);
  }
});

// Delete data
export const deleteAsyncTodos = createAsyncThunk("todos/deleteAsyncTodos" , async (payload, {rejectWithValue}) => {
  try {
  await axios.delete(`http://localhost:3001/todos/${payload.id}`);
  return {id: payload.id};
  } catch (error) {
    return rejectWithValue([] , error);
  }
});

// Synce
const initialState = {
  todos: [ ],
  error : null,
  loading : false,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state , action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodos: (state , action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state , action) => {
      const filteredTodos = state.todos.filter((t) => t.id !== action.payload.id);
      state.todos = filteredTodos;
    }
  }, 
  extraReducers : {  // Async
    [getAsyncTodos.fulfilled] : (state , action) => {
      return {...state , todos: action.payload, loading: false , error: null };
    },
    [addAsyncTodos.fulfilled] : (state , action) => {
      state.todos.push(action.payload);
    },
    [toggleCompleteAsyncTodos.fulfilled] : (state , action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = action.payload.completed;
    },
    [deleteAsyncTodos.fulfilled] : (state , action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    [getAsyncTodos.pending] : (state ) => {
      return {...state , todos: [], loading: true , error: null };
    },
    [getAsyncTodos.rejected] : (state , {payload}) => {
      return {...state , todos: [], loading: false , error: payload.message};
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo , toggleTodos , deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;