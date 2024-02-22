export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
}

export const initialState: State = {
  tasks: [
    {id: 1, text: 'Meeting', completed: true},
    {id: 2, text: 'Presentation', completed: true},
    {id: 3, text: 'Deadline', completed: false},
    {id: 4, text: 'Report', completed: true},
    {id: 5, text: 'Training', completed: false},
    {id: 6, text: 'Project kickoff', completed: false},
    {id: 7, text: 'Client call', completed: true},
    {id: 8, text: 'Code review', completed: false},
    {id: 9, text: 'Brainstorming session', completed: true},
    {id: 10, text: 'Performance evaluation', completed: false},
  ],
};
