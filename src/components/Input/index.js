/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import * as C from './styles';

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <C.Input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
