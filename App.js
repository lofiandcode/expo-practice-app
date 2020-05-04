import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './components/Checkbox/Checkbox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Hello World!</Text>
      <Checkbox checked={false} size={50} disabled={false} />
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
