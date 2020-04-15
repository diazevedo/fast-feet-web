/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';
import Form from '~/components/Form/Form';
import FormHeader from '~/components/Form/FormHeader';
import Input from '~/components/Input';

export default function FormRecipient({
  handleSubmit,
  title,
  onClickButtonBack,
  initialData,
}) {
  return (
    <Form handleSubmit={handleSubmit} initialData={initialData}>
      <FormHeader title={title} onClickButtonBack={onClickButtonBack} />

      <C.FormBodyGrid>
        <label htmlFor="Name" id="name">
          Name
          <Input type="text" name="name" placeholder="e.g John McGold" />
        </label>
        <label htmlFor="street" id="street">
          Street
          <Input type="street" name="street" placeholder="e.g Liverpool" />
        </label>
        <label htmlFor="number" id="number">
          Number
          <Input type="text" name="number" placeholder="e.g Liverpool" />
        </label>

        <label htmlFor="address_complement" id="complement">
          Complement
          <Input
            type="text"
            name="address_complement"
            placeholder="e.g Liverpool"
          />
        </label>

        <label htmlFor="city" id="city">
          City
          <Input type="text" name="city" placeholder="e.g Manchester" />
        </label>

        <label htmlFor="state" id="state">
          State
          <Input type="text" name="state" placeholder="e.g Liverpool" />
        </label>

        <label htmlFor="post_code" id="post_code">
          Post Code
          <Input type="post_code" name="post_code" placeholder="e.g 2020" />
        </label>
      </C.FormBodyGrid>
    </Form>
  );
}

FormRecipient.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // schema: PropTypes.object,
  initialData: PropTypes.object,
  title: PropTypes.string.isRequired,
  onClickButtonBack: PropTypes.func.isRequired,
};

FormRecipient.defaultProps = {
  // initialData: {},
  initialData: {},
};
