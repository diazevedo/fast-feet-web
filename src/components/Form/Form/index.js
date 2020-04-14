/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const FormCustom = ({ handleSubmit, initialData, children }) => {
  return (
    <C.FormCustom onSubmit={handleSubmit} initialData={initialData}>
      {children}
    </C.FormCustom>
  );
};

FormCustom.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object.isRequired,
  // schema: PropTypes.object,
  children: PropTypes.element.isRequired,
};

// Form.defaultProps = {
//   schema: {},
// };
export default FormCustom;
