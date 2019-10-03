/*
 * Navigation actions can be used for react navigation manipulaions.
 * NB: do not use dispatch for navigationActions
 * Purely functional - redux integration removed in favour of performance
 */

import NavigationService from '../navigation/navigationService';

export function navigateToHomeScreen(params) {
  NavigationService.navigate('HomeScreen', params);
}

export function navigateToLoginScreen(params) {
  NavigationService.navigate('LoginScreen', params);
}
