import React from 'react';
import {Task} from '../redux/types';

export interface TodoItemProps {
  data: Task;
}

export interface ButtonProps {
  color: string;
}

export interface NewsModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}
