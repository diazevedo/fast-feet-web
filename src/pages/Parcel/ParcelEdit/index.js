/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useCallback } from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import PageTitle from '~/components/PageTitle';
import ButtonIcon from '~/components/ButtonIcon';
import CustomAsyncSelect from '~/components/CustomAsyncSelect';

import api from '~/services/api';

import * as C from './styles';
import color from '~/styles/colors';

const ParcelEdit = ({ match }) => {
  const history = useHistory();

  const prepareDataForInputs = useCallback((data) => {
    return data.map((d) => ({
      value: d.id,
      label: d.name,
    }));
  });

  const loadRecipients = useCallback(
    async (name = '') => {
      const response = await api.get('/recipients', {
        params: { name },
      });
      return prepareDataForInputs(response.data);
    },
    [prepareDataForInputs]
  );

  const loadCouriers = useCallback(
    async (name = '') => {
      const response = await api.get('admin/couriers', { params: { name } });

      return prepareDataForInputs(response.data);
    },
    [prepareDataForInputs]
  );

  useEffect(() => {
    loadRecipients();
    loadCouriers();
  }, [loadRecipients, loadCouriers]);

  const onClickButtonBack = () => history.push({ pathname: '/parcel' });

  const handleSubmitForm = (data) => console.log(data);

  return (
    <C.Main>
      <PageTitle>Edit Parcel</PageTitle>
      <ButtonIcon type="button" text="retornar" handleClick={onClickButtonBack}>
        <MdKeyboardArrowLeft color={color.fourth} size={25} />
      </ButtonIcon>

      <C.FormCustom onSubmit={handleSubmitForm}>
        <C.WrapperSelectGroup>
          <CustomAsyncSelect
            name="recipient"
            label="Recipient"
            defaultOptions
            placeholder="e.g John Smith"
            loadOptions={loadRecipients}
          />

          <CustomAsyncSelect
            name="courier"
            label="Courier"
            defaultOptions
            placeholder="e.g Peter Scholes"
            loadOptions={loadCouriers}
          />
        </C.WrapperSelectGroup>

        <label htmlFor="product">Product</label>
        <C.InputText
          type="text"
          name="product"
          id="product"
          placeholder="e.g Laptop"
        />

        <ButtonIcon text="Save" type="submit">
          <MdDone color={color.fourth} size={22} />
        </ButtonIcon>
      </C.FormCustom>
    </C.Main>
  );
};

export default ParcelEdit;
