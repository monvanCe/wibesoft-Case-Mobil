import {ADD_TASK, REMOVE_TASK, TOGGLE_TASK, SET_STATE} from './actionTypes';
import {State} from './types';

export const addTask = (task: string) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = (taskId: number) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const removeTask = (taskId: number) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const setState = (state: State) => ({
  type: SET_STATE,
  payload: state,
});
