import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ButtonRow from './ButtonRow';

export default class Keypad extends Component {
  render() {
    return (
      <View style={ styles.keypadView }>
        <ButtonRow 
          buttonValues={ ['C', 'x²', '√', '%'] } 
          onClick={(pressedButtonValue) => this.props.onClick(pressedButtonValue)}>
        </ButtonRow>
        <ButtonRow 
          buttonValues={ ['7', '8', '9', 'x'] } 
          onClick={(pressedButtonValue) => this.props.onClick(pressedButtonValue)}>
        </ButtonRow>
        <ButtonRow 
          buttonValues={ ['4', '5', '6', '-'] }
          onClick={(pressedButtonValue) => this.props.onClick(pressedButtonValue)}>
        </ButtonRow>
        <ButtonRow 
          buttonValues={ ['1', '2', '3', '+'] }
          onClick={(pressedButtonValue) => this.props.onClick(pressedButtonValue)}>          
        </ButtonRow>
        <ButtonRow 
          buttonValues={ ['0', '.', '=', '/'] }
          onClick={(pressedButtonValue) => this.props.onClick(pressedButtonValue)}>
        </ButtonRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keypadView: {
    flex: 2,
    flexDirection: 'column',
    marginBottom: 30
  }
});