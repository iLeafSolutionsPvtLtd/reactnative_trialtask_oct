import React, {Component} from 'react';
import FeaturedScreen from './FeaturedScreen';
import {connect} from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';

class FeaturedContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FeaturedScreen {...this.props} />;
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
)(FeaturedContainer);
