import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import store from './features/store';
import {Provider} from 'react-redux';
import Main from './screens/Main';

const App = () => {
  return (
    <Provider store={store} >
      <Main />
    </Provider>      
  );
}


export default App;