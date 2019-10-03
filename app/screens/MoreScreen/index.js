import React, {Component} from 'react';
import MoreScreen from './MoreScreen';
import {connect} from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';

class MoreContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MoreScreen {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {
    navigateToHomeScreen: () => {
      navigationActions.navigateToHomeScreen;
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoreContainer);
