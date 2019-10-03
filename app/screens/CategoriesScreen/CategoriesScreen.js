import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import styles from './styles';
import Images from '../../config/images';
import NavigationHeader from '../../components/NavigationHeader/NavigationHeader';


class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
       <NavigationHeader headerTitle={'CATEGORIES'} />
        <View style={styles.container}>
         
            <Image source={Images.comingsoon} style={styles.imageStyle} resizeMode="contain" />
         
        </View>
      </SafeAreaView>
    );
  }
}

export default CategoriesScreen;
