export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
}

export const initialState: State = {
  tasks: [],
};
