import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TodoItemProps} from './types';
import {useDispatch} from 'react-redux';
import {removeTask, toggleTask} from '../redux/actions';

export const TodoItem: React.FC<TodoItemProps> = ({data}) => {
  const active = data.completed;
  const dispatch = useDispatch();

  const iconName = active
    ? 'checkbox-marked-outline'
    : 'checkbox-blank-outline';

  const renderRightAction = () => {
    return (
      <TouchableHighlight style={styles.rightAction} onPress={handleDelete}>
        <Icon name="delete" size={20} color="white" />
      </TouchableHighlight>
    );
  };

  const handleDelete = () => {
    dispatch(removeTask(data.id));
  };

  const handleCheckBox = () => {
    dispatch(toggleTask(data.id));
  };

  return (
    <Swipeable renderRightActions={renderRightAction}>
      <View style={styles.container}>
        <Text style={styles.text}>{data.text}</Text>
        <TouchableOpacity onPress={handleCheckBox}>
          <Icon name={iconName} size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    height: 40,
    width: '100%',
    backgroundColor: '#c29e3a',
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
  rightAction: {
    height: 40,
    width: 40,
    backgroundColor: '#c23f3a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
