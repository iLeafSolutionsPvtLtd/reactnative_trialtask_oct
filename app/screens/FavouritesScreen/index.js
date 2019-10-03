import React, {Component} from 'react';
import Favouritescreen from './Favouritescreen';
import {connect} from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';

class FavouritesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Favouritescreen {...this.props} />;
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
)(FavouritesContainer);
