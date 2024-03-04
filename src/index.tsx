/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {TodoItem} from './components/TodoItem';
import {View} from 'react-native';
import {styles} from './style';
import {Button} from './components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {State} from './redux/types';
import AddTaskModal from './components/AddTaskModal';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setState} from './redux/actions';

const Main = () => {
  const tasks = useSelector((state: State) => state.tasks);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const getLocal = async () => {
      const localData = await AsyncStorage.getItem('tasks');
      if (localData) {
        dispatch(setState(JSON.parse(localData)));
      }
    };
    getLocal();
  }, [dispatch]);

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
