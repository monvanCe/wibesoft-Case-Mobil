import React, {useState} from 'react';
import {TodoItem} from './components/TodoItem';
import {View} from 'react-native';
import {styles} from './style';
import {Button} from './components/Button';
import {useSelector} from 'react-redux';
import {State} from './redux/types';
import AddTaskModal from './components/AddTaskModal';
import {ScrollView} from 'react-native-gesture-handler';

const Main = () => {
  const tasks = useSelector((state: State) => state.tasks);

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 30}}>
        {tasks.map(item => (
          <View key={item.id}>
            <TodoItem data={item} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button color={'#3246a8'} onPress={openModal}>
          Add Task
        </Button>
      </View>

      <AddTaskModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

export default Main;
