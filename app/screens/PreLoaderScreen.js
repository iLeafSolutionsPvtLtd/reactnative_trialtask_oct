import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

// import SplashScreen from 'react-native-splash-screen';

class PreLoaderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // setTimeout(function() {
    //   SplashScreen.hide();
    // }, 3000);
    this._checkAppIntroStatus();
  }

  //Method to check whether user logged in or not.
  _checkAppIntroStatus() {
    const {token} = this.props.loginReducer;
    if (token.length > 0) {
      this.props.navigation.navigate('HomeScreen');
    } else {
      this.props.navigation.navigate('LoginScreen');
    }
  }

  render() {
    return <View />;
  }
}

function mapStateToProps(state) {
  return {
    loginReducer: state.loginReducer,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreLoaderScreen);
