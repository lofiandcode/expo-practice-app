import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckboxContainer from './components/CheckboxContainer';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Hello World!</Text>
      <CheckboxContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
