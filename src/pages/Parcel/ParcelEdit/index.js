/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useCallback } from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';

import * as Yup from 'yup';
import PageTitle from '~/components/PageTitle';
import ButtonIcon from '~/components/ButtonIcon';
import CustomAsyncSelect from '~/components/CustomAsyncSelect';

import api from '~/services/api';
// import schema from './schema';

import * as C from './styles';
import color from '~/styles/colors';

// constants password length
const schema = Yup.object().shape({
  recipient: Yup.object().required('Please select a courier.'),
  courier: Yup.object().required('Please select a recipient.'),
  product: Yup.string()
    .min(2, 'A product name must be longer than 2 characteres.')
    .required('Product name  is required.'),
});
const ParcelEdit = () => {
  const location = useLocation();
  const { parcel_id } = location.state;
  const history = useHistory();

  const prepareDataForInputs = useCallback((data) => {
    return data.map((d) => ({
      value: d.id,
      label: d.name,
    }));
  }, []);

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

  // useEffect(() => {
  //   loadRecipients();
  //   loadCouriers();
  // }, [loadRecipients, loadCouriers]);

  const onClickButtonBack = () => history.push({ pathname: '/parcel' });

  const handleSubmitForm = async (data) => {
    try {
      await api.put(`/parcels/${parcel_id}`, {
        product: data.product,
        courier_id: data.courier.value,
        recipient_id: data.recipient.value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Main>
      <C.FormCustom
        onSubmit={handleSubmitForm}
        initialData={location.state}
        schema={schema}
      >
        <C.Header>
          <PageTitle>Edit Parcel</PageTitle>
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
    </C.Main>
  );
};

export default ParcelEdit;
