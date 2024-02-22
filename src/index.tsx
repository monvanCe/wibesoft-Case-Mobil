import React, {useState} from 'react';
import {TodoItem} from './components/TodoItem';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './style';
import {Button} from './components/Button';
import {useSelector} from 'react-redux';
import {State} from './redux/types';
import NewsModal from './components/Modal';

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
      {tasks.map(item => (
        <TodoItem data={item} />
      ))}
      <TouchableOpacity onPress={openModal}>
        <Button color={'#3246a8'} />
      </TouchableOpacity>
      <NewsModal
        children={<Text>Selam Dünya</Text>}
        visible={modalVisible}
        onClose={closeModal}
      />
    </View>
  );
};

export default Main;
