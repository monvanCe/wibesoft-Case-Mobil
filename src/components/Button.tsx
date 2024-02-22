import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './types';

export const Button: React.FC<ButtonProps> = ({color, children, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginHorizontal: 20,
  },
});
