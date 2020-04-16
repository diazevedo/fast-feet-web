import React from 'react';
import PropTypes from 'prop-types';
// import * as C from 'styles';

const IssueDetails = ({ text }) => {
  return (
    <>
      <h2>See problem</h2>
      <p>{text}</p>
    </>
  );
};

IssueDetails.propTypes = {
  text: PropTypes.string.isRequired,
};

export default IssueDetails;
