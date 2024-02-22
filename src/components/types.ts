import React from 'react';
import {Task} from '../redux/types';

export interface TodoItemProps {
  data: Task;
}

export interface ButtonProps {
  onPress: () => void;
  color: string;
  children: React.ReactNode;
}

export interface AddTaskModelProps {
  visible: boolean;
  onClose: () => void;
}
