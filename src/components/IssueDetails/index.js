import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

const IssueDetails = ({ description }) => {
  return (
    <>
      <C.ModalTitle>See problem</C.ModalTitle>
      <C.Text>{description}</C.Text>
    </>
  );
};

IssueDetails.propTypes = {
  description: PropTypes.string.isRequired,
};

export default IssueDetails;
