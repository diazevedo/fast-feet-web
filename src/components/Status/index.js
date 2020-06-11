import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export default function Status({ status }) {
  return <C.Status status={status}>{status}</C.Status>;
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
