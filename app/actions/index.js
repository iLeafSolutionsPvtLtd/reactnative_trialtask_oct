/**
 * Action -  index class for actions
 */

// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './loginActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
);
