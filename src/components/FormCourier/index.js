/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import Form from '~/components/Form/Form';
import FormHeader from '~/components/Form/FormHeader';
import FormBody from '~/components/Form/FormBody';
import Input from '~/components/Input';
import AvatarInput from './AvatarInput';

export default function FormCourier({
  handleSubmit,
  title,
  onClickButtonBack,
  initialData,
}) {
  return (
    <Form handleSubmit={handleSubmit} initialData={initialData}>
      <FormHeader title={title} onClickButtonBack={onClickButtonBack} />

      <FormBody>
        <AvatarInput name="avatar_id" />

        <label htmlFor="Name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="e.g John McGold"
        />

        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="e.g john@fastfeet.com"
        />
      </FormBody>
    </Form>
  );
}

FormCourier.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // schema: PropTypes.object,
  initialData: PropTypes.object,
  title: PropTypes.string.isRequired,
  onClickButtonBack: PropTypes.func.isRequired,
};

FormCourier.defaultProps = {
  // schema: {},
  initialData: {},
};
