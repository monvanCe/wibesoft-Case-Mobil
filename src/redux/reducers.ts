import {ADD_TASK, TOGGLE_TASK, REMOVE_TASK} from './actionTypes';
import {initialState, State} from './types';

const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case ADD_TASK:
      return {
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
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {...task, completed: !task.completed}
            : task,
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
