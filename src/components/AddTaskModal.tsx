import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {AddTaskModelProps} from './types';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/actions';
import {Button} from './Button';

const AddTaskModel: React.FC<AddTaskModelProps> = ({visible, onClose}) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask(task));
    setTask('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              value={task}
              onChangeText={setTask}
              placeholder="Enter the task"
              autoFocus={true}
            />
            <View style={styles.buttonContainer}>
              <Button color="#a83a32" onPress={onClose}>
                Close
              </Button>
              <Button color="#3246a8" onPress={handleAddTask}>
                Add
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  content: {
    height: 130,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
});

export default AddTaskModel;
