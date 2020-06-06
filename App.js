import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollContainer from './components/ScrollContainer/ScrollContainer'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isButtonDisabled: true,
    }
  }

  handleScrollEnd = () => {
    this.setState({isButtonDisabled: false});
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <ScrollContainer 
              onScrollToEnd={this.handleScrollEnd}
              style={styles.scrollView}
          >
            <Text style={styles.text} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollContainer>
        </View>
        <Button style={styles.button} title='Accept' onPress={() => {}} disabled={this.state.isButtonDisabled} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 2,
  },
  scrollView: {
    width: '100%',
    height: 400,
    borderWidth: 3,
    borderColor: '#000000',
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
  button: {
    flex: 1,
  },
});
