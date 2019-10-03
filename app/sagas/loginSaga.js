// /* Redux saga class
//  * logins the user into the app
//  * requires username and password.
//  */
// import {put, call, select} from 'redux-saga/effects';
// import Snackbar from 'react-native-snackbar';
// import loginUser from '../api/methods/loginUser';
// import * as loginActions from '../actions/loginActions';
// import * as navigationActions from '../actions/navigationActions';

// //selector Function used to access reducer states
// export const getNetworkState = state => {
//   return {};
// };

// // Our worker Saga that logins the user
// export default function* loginAsync(action) {
//   yield put(loginActions.enableLoader());
//   try {
//     const response = yield call(loginUser, action.username, action.password);

//     if (response.success) {
//       yield put(loginActions.onLoginResponse(response.data));
//       setTimeout(() => {
//         Snackbar.show({
//           title: 'You Have Successfully Logged In',
//           duration: Snackbar.LENGTH_SHORT,
//         });
//       }, 200);
//       yield call(navigationActions.navigateToHomeScreen);
//       yield put(loginActions.disableLoader({}));
//     } else {
//       yield put(loginActions.loginFailed());
//       yield put(loginActions.disableLoader({}));
//       setTimeout(() => {
//         Snackbar.show({
//           title: response.Message,
//           duration: Snackbar.LENGTH_SHORT,
//         });
//       }, 200);
//     }
//   } catch (error) {
//     yield put(loginActions.loginFailed());
//     yield put(loginActions.disableLoader({}));
//   }
// }
