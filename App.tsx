import React from 'react';
import Main from './src';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView>
          <Main />
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
