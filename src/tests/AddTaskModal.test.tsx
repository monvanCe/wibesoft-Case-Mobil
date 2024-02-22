import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AddTaskModel from '../components/AddTaskModal';

describe('AddTaskModel', () => {
  test('should call onClose when Close button is pressed', () => {
    const onCloseMock = jest.fn();
    const {getByText} = render(
      <AddTaskModel visible={true} onClose={onCloseMock} />,
    );

    fireEvent.press(getByText('Close'));

    expect(onCloseMock).toHaveBeenCalled();
  });

  test('should call handleAddTask when Add button is pressed', () => {
    const handleAddTaskMock = jest.fn();
    const {getByText, getByPlaceholderText} = render(
      <AddTaskModel visible={true} onClose={() => {}} />,
    );
    const taskInput = getByPlaceholderText('Enter the task');

    fireEvent.changeText(taskInput, 'New Task');
    fireEvent.press(getByText('Add'));

    expect(handleAddTaskMock).toHaveBeenCalled();
  });

  test('should clear input after adding task', () => {
    const {getByText, getByPlaceholderText} = render(
      <AddTaskModel visible={true} onClose={() => {}} />,
    );
    const taskInput = getByPlaceholderText('Enter the task');

    fireEvent.changeText(taskInput, 'New Task');
    fireEvent.press(getByText('Add'));

    expect(taskInput.props.value).toBe('');
  });
});
