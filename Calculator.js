import React, { Component } from 'react';
import { Alert, View, StyleSheet } from 'react-native';

import Keypad from './components/Keypad';
import Display from './components/Display';

const operations = ['+', '-', 'x', '/'];
const singleNumberOperations = ['x²', '√', '%'];

export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      answer: '',
      op: null,
      opButtonClicked: false
    }
  }

  handleClick(buttonPressed) {
    if (operations.includes(buttonPressed)) {
      if (this.state.firstNumber.length) {
        this.setState({opButtonClicked: true});
        this.setState({op: buttonPressed});
        this.setState({answer: ''});
      }
    } else if (singleNumberOperations.includes(buttonPressed)) {      
      if (this.state.firstNumber.length) {            
        this.setState({opButtonClicked: true});
        this.setState({op: buttonPressed}, () => {
          let answer = this.performOperation();
          this.setState({answer: answer.toString()});
          this.setState({firstNumber: answer.toString()});
          this.setState({op: null});
          this.setState({opButtonClicked: false});          
        });        
      }
    } else if (buttonPressed === '=') {
      if (!this.state.answer.length) {
        let answer = this.performOperation();
        this.setState({answer: answer.toString()});
        this.setState({firstNumber: answer.toString()});
        this.setState({secondNumber: ''});
        this.setState({op: null});
        this.setState({opButtonClicked: false});
      }
    } else if (buttonPressed === 'C') {
      this.setState({
        firstNumber: '',
        secondNumber: '',
        answer: '',
        op: null,
        opButtonClicked: false
      });
    } else {
      if (!this.state.opButtonClicked) {
        let x = this.state.firstNumber;
            x = x + buttonPressed;
        this.setState({firstNumber: x});
      } else {
        let y = this.state.secondNumber;
            y = y + buttonPressed;
        this.setState({secondNumber: y});
      }
    }
  }

  performOperation() {  
    switch (this.state.op) {
      case '+': return parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber);
      case '-': return parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber);
      case 'x': return parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber);
      case '/': return parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber);
      case 'x²': return parseFloat(this.state.firstNumber) * parseFloat(this.state.firstNumber);
      case '√': return Math.sqrt(parseFloat(this.state.firstNumber));
      case '%': return (parseFloat(this.state.firstNumber) / 100);
      default: return '';
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Display
          valueToDisplay={(this.state.opButtonClicked) ?
             this.state.secondNumber : (!this.state.opButtonClicked && this.state.answer) ?
             this.state.answer : this.state.firstNumber}
        />
        <Keypad 
          onClick={(pressedButtonValue) => this.handleClick(pressedButtonValue)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    padding: 5
  }
});
