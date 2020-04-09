/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import Select from 'react-select/async';

import styles from './styles';

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
    <>
      <label htmlFor={`select-${name}`}>{label}</label>
      <Select
        id={`select-${name}`}
        cacheOptions
        ref={selectRef}
        label="Single select"
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        styles={styles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: '#ddd',
          },
        })}
        {...rest}
      />
    </>
  );
}

CustomAsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
