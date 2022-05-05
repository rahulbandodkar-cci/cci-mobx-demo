import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { observer } from 'mobx-react-lite';
import { Provider, useStore, initializeStore } from "./models";
import CounterComp from './components/CounterComponent';

const store = initializeStore();

const App = () => {
  return (
    <Provider value={store} >
      <View style={styles.container}>
      <CounterComp />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
