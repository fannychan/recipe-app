import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import Picture from './img/background-resized.png';
import MenuButton from './components/menubutton';

type Props = {};
export default class Homepage extends Component<Props> {
  render() {
    return (
     <ImageBackground source={Picture} style={{width: '100%', height: '100%'}}>
       <View>
            <Text style={styles.title}>What's for dinner tonight?</Text>
            <MenuButton />
        </View>
     </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    title: {
      textAlign: 'center',
      color: 'white',
      marginTop: 70,
      fontSize: 24
    },
});
