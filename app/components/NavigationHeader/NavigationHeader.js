/**
 * NavigationHeader - Navigation header component.
 */

import React, {Component} from 'react';
import {View, Text, StatusBar,Image} from 'react-native';
import styles from './styles';
import Images from '../../config/images';

class NavigationHeader extends Component {
render() {
  const {headerTitle} = this.props;
    return (
      <View>
        <StatusBar/>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.headerView}>
              <Text style={styles.titleText}>589</Text>
            </View>
            <Text style={styles.titleText}>{headerTitle}</Text>
            <Image source={Images.user} style={styles.imageDimension}/>
          </View>
        </View>
      </View>
    );
  }
}
export default NavigationHeader;
