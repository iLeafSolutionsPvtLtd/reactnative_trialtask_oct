import React, {Component} from 'react';
import CouponScreen from './CouponScreen';
import {connect} from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <CouponScreen {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
