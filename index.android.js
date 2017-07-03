/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class albums2 extends Component {
  render() {
    return (
      <View>
        <Header headerText={"Albums"}/>
        <AlbumList/>
      </View>
    );
  }
}

AppRegistry.registerComponent('albums2', () => albums2);
