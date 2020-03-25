/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
const RouteWrapper = ({ component: Component }) => {
  const signed = false;

  // if (!signed && isPrivate) {
  if (!signed) {
    return <Redirect to="/" />;
  }
  // console.log(9999);
  // // if (signed && !isPrivate) {
  // if (signed) {
  //   return <Redirect to="/dashboard" />;
  // }

  const Layout = ({ children }) => <div>{children}</div>;
  return (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
