import React from 'react';
import PropTypes from 'prop-types';
import * as C from './styles';

const IssueDetails = ({ text }) => {
  return (
    <>
      <C.ModalTitle>See problem</C.ModalTitle>
      <C.Text>{text}</C.Text>
    </>
  );
};

IssueDetails.propTypes = {
  text: PropTypes.string.isRequired,
};

export default IssueDetails;
