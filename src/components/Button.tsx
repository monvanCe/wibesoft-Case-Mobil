import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './types';

export const Button: React.FC<ButtonProps> = ({color}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>Button</Text>
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
  },
});
