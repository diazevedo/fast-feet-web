/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import Select from 'react-select/async';

import * as C from './styles';
// import stylesComponent from './stylesComponent';

export default function CustomAsyncSelect({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: (ref) => {
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <C.Wrapper>
      <label htmlFor={`select-${name}`}>{label}</label>
      <Select
        id={`select-${name}`}
        cacheOptions
        ref={selectRef}
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        styles={C.select}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary: '#ddd7',
          },
        })}
        {...rest}
      />
    </C.Wrapper>
  );
}

CustomAsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
