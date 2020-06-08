import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as signActions from '~/store/modules/auth/actions';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidUpdate() {
    const { hasError } = this.state;
    const { cleanToken } = this.props;

    // if (hasError) {
    //   cleanToken();
    //   setTimeout(() => window.location.reload(), 3000);
    // }
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Your session has expired.</h1>;
    }

    return children;
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(signActions, dispatch);

export default connect(null, mapDispatchToProps)(ErrorBoundary);

ErrorBoundary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  cleanToken: PropTypes.func.isRequired,
};
