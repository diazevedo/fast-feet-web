/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';
import Form from '~/components/Form/Form';
import FormHeader from '~/components/Form/FormHeader';
import FormBody from '~/components/Form/FormBody';
import CustomAsyncSelect from '~/components/CustomAsyncSelect';
import Input from '~/components/Input';

const FormParcel = ({
  handleSubmit,
  // schema,
  initialData,
  title,
  onClickButtonBack,
  loadRecipients,
  loadCouriers,
}) => {
  return (
    <Form handleSubmit={handleSubmit} initialData={initialData}>
      <FormHeader title={title} onClickButtonBack={onClickButtonBack} />
      <FormBody>
        <C.WrapperSelectGroup>
          <CustomAsyncSelect
            name="recipient"
            label="Recipient"
            defaultOptions
            cacheOptions
            placeholder="e.g John Smith"
            loadOptions={loadRecipients}
            noOptionsMessage={() => 'No recipient found.'}
          />
        </C.WrapperSelectGroup>

        <C.WrapperSelectGroup>
          <CustomAsyncSelect
            name="courier"
            label="Courier"
            defaultOptions
            placeholder="e.g Peter Scholes"
            loadOptions={loadCouriers}
            noOptionsMessage={() => 'No courier found.'}
          />
        </C.WrapperSelectGroup>

        <label htmlFor="product">Product</label>
        <Input
          type="text"
          name="product"
          id="product"
          placeholder="e.g Laptop"
        />
      </FormBody>
    </Form>
  );
};

FormParcel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // schema: PropTypes.object,
  initialData: PropTypes.object,
  title: PropTypes.string.isRequired,
  onClickButtonBack: PropTypes.func.isRequired,
  loadRecipients: PropTypes.func.isRequired,
  loadCouriers: PropTypes.func.isRequired,
};

FormParcel.defaultProps = {
  // schema: {},
  initialData: {},
};

export default FormParcel;
