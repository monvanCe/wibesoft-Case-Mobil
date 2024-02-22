import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';
import {NewsModalProps} from './types';

const NewsModal: React.FC<NewsModalProps> = ({children, visible, onClose}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>{children}</View>
          <View style={styles.buttonContainer}>
            <Button title="Kapat" onPress={onClose} />
          </View>
        </View>
      </View>
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
  content: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 5,
    position: 'absolute',
    width: '80%',
    bottom: 10,
  },
});

export default NewsModal;
