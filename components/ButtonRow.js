import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class ButtonRow extends Component {
  render() {
    return (
      <View style={ styles.buttonRow }>
        {
          this.props.buttonValues.map((value, index) => {       
              return (
                <View 
                  key={ index } 
                  style={[ styles.buttonView,
                    isNaN(value) ? styles.buttonOperation : styles.buttonNumber ]}
                >                
                  <Button 
                    key={ index } 
                    title={ value } 
                    onPress={() => this.props.onClick(value)}
                  />            
                </View>            
              );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  buttonView: {
    flex: 1,
    width: '70%',
    height: '80%',
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonNumber: {
    backgroundColor: 'white',
  },
  buttonOperation: {
    backgroundColor: 'yellow',
  }
});