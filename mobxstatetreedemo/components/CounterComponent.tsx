import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { observer } from 'mobx-react-lite';
import { useStore } from "../models";


const CounterComp = observer(() => {

  const {countStore}: any = useStore();

  return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', color: countStore.count > 5 ? "green" : "red"}} >    
          {countStore.greaterThanFive()}
        </Text>
        <View style={{marginTop: 15}}></View>
        <Text style={{textAlign: 'center'}} >{countStore.displayCount()}</Text>
        <View style={{marginTop: 15}}></View>
        <Button title="Increment" onPress={() => countStore.increment()} />
        <View style={{marginTop: 8}}></View>
        <Button title="Decrement" onPress={() => countStore.decrement()} />
      </View>
  );
});

export default CounterComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
