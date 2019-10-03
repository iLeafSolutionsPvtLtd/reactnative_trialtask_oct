import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar backgroundColor="#005776" barStyle="light-content" />
        <View />
      </SafeAreaView>
    );
  }
}

export default DrawerComponent;
