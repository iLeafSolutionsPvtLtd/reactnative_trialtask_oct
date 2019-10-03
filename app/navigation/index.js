import React, {Component} from 'react';
import NavigationStack from './navigationStack';
import NavigationService from './navigationService';

class AppNavigator extends Component {
  render() {
    return (
      <NavigationStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavigator;
