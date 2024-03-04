import {ADD_TASK, TOGGLE_TASK, REMOVE_TASK, SET_STATE} from './actionTypes';
import {initialState, State} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setStorage = (state: any) => {
  AsyncStorage.setItem('tasks', JSON.stringify(state));
};

const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case ADD_TASK:
      const addState = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
      setStorage(addState);
      return addState;
    case TOGGLE_TASK:
      const toggleState = {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {...task, completed: !task.completed}
            : task,
        ),
      };
      setStorage(toggleState);
      return toggleState;
    case REMOVE_TASK:
      const removeState = {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
      setStorage(removeState);
      return removeState;
    case SET_STATE:
      setStorage(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
