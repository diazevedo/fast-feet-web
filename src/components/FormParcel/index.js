import React from 'react';

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import * as C from './styles';

import PageTitle from '~/components/PageTitle';
import ButtonIcon from '~/components/ButtonIcon';
import CustomAsyncSelect from '~/components/CustomAsyncSelect';

import color from '~/styles/colors';

const FormParcel = ({
  handleSubmit,
  schema,
  initialData,
  title,
  onClickButtonBack,
  loadRecipients,
  loadCouriers,
}) => {
  return (
    <C.FormCustom
      onSubmit={handleSubmit}
      initialData={initialData}
      // schema={schema}
    >
      <C.Header>
        <PageTitle>{title}</PageTitle>
        <C.WrapperButtton>
          <ButtonIcon
            type="button"
            text="cancel"
            handleClick={onClickButtonBack}
          >
            <MdKeyboardArrowLeft color={color.fourth} size={25} />
          </ButtonIcon>

          <ButtonIcon text="Save" type="submit">
            <MdDone color={color.fourth} size={22} />
          </ButtonIcon>
        </C.WrapperButtton>
      </C.Header>

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
      <C.InputText
        type="text"
        name="product"
        id="product"
        placeholder="e.g Laptop"
      />
    </C.FormCustom>
  );
};

export default FormParcel;
