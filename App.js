import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import CheckboxContainer from './components/CheckboxContainer';
import ScrollContainer from './components/ScrollContainer/ScrollContainer'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isButtonDisabled: true,
    }
  }

  handleScrollEnd = () => {
    this.checkState();
    console.log("Entered handleScrollEnd and isButtonDisabled = ", this.state.isButtonDisabled);
    this.setState({isButtonDisabled: false}, () => this.checkState());
    console.log('Right after setState ->', () => this.checkState())
  }

  checkState = () => {
    console.log("isButtonDisabled = ", this.state.isButtonDisabled)
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
        <Button style={styles.button} title='Accept' onPress={() => {}} disabled={this.state.disabled} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: '100%',
    height: '400px',
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
