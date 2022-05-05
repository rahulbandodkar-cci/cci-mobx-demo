import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { rootStore, StoreProvider, useStore } from "./store";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const { countStore } = useStore();

  return (
    <StoreProvider value={rootStore} >
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}} >Count = {countStore.count} </Text>
        <View style={{marginTop: 15}}></View>
        <Button title="Increment" onPress={() => countStore.increment()} />
        <View style={{marginTop: 8}}></View>
        <Button title="Decrement" onPress={() => countStore.decrement()} />
      </View>
    </StoreProvider>
  );
})

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
