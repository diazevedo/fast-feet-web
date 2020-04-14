/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

const FormBody = ({ children }) => {
  return <C.FormBody>{children}</C.FormBody>;
};

FormBody.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FormBody;
