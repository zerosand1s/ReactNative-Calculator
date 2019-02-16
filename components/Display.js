import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class Display extends Component {
  render() {
    return (
      <View style={ styles.inputView }>
        <TextInput 
          style={ styles.input }
          caretHidden={true}
          value={ this.props.valueToDisplay }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    flex: 1
  },
  input: {
    height: 100,
    marginTop: '25%',
    padding: '5%',
    fontSize: 60,
    textAlign: 'right',
    color: 'white'
  }
});