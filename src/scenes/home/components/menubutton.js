import React, {Component} from 'react';
import {Button, StyleSheet} from 'react-native';
import Home from '../homepage';


export default class MenuButton extends Component {
  render() {
    return (
        <Button style={styles.button}
        title="Asian food"
        accessibilityLabel="Asian food"
        onPress={Home} />
    );
  }
};


const styles = StyleSheet.create({
  button: {
  color: 'white',
  },
});
