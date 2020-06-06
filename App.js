import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollContainer from './components/ScrollContainer/ScrollContainer'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      checked: false,
      isButtonDisabled: true,
      termsAndConditions: "You hereby agree to the terms and conditions set forth by The Be Good Project Foundation including but not limited to the Food Donation Waiver, Privacy Policy, etc. You hereby agree to the terms and conditions set forth by The Be Good Project Foundation including but not limited to the Food Donation Waiver, Privacy Policy, etc. You hereby agree to the terms and conditions set forth by The Be Good Project Foundation including but not limited to the Food Donation Waiver, Privacy Policy, etc. You hereby agree to the terms and conditions set forth by The Be Good Project Foundation including but not limited to the Food Donation Waiver, Privacy Policy, etc. ",
      checkboxLabel: "I agree to the Terms and Conditions",
    }
  }

  handleScrollEnd = () => {
    this.setState({isButtonDisabled: false});
  }
  handleOnPress = () => {
    let toddleChecked = !this.state.checked
    this.setState({checked: toddleChecked})
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <ScrollContainer
              onScrollToEnd={ this.handleScrollEnd }
              onPress={ this.handleOnPress }
              styleContainer={ styles.scrollView }
              styleDocumentText={ styles.documentText }
              styleCheckboxLabel={ styles.checkboxLabel }
              documentText={ this.state.termsAndConditions }
              checkboxLabel={ this.state.checkboxLabel }
              displayCheckbox={ true }
              checked={ this.state.checked }
          />
        </View>
        <Button style={styles.button} title='Accept' onPress={() => {}} disabled={this.state.isButtonDisabled} />
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
    height: 400,
    borderWidth: 3,
    borderColor: '#000000',
    backgroundColor: 'pink',
  },
  documentText: {
    fontSize: 42,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  button: {
    flex: 1,
  },
});
