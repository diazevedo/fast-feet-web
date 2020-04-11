import api from '~/services/api';

function prepareDataForInputs(data) {
  return data.map((d) => ({
    value: d.id,
    label: d.name,
  }));
}

export const loadRecipients = async (name = '') => {
  const response = await api.get('/recipients', {
    params: { name },
  });
  return prepareDataForInputs(response.data);
};

export const loadCouriers = async (name = '') => {
  const response = await api.get('admin/couriers', { params: { name } });

  return prepareDataForInputs(response.data);
};
