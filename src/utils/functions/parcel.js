import api from '~/services/api';
import { formatDate } from './date';

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

export const parcelStatus = ({ canceled_at, end_date, start_date }) => {
  if (canceled_at) return 'cancelled';
  if (end_date) return 'delivered';
  if (start_date) return 'picked';

  return 'pending';
};

export const formatParcels = (parcels) => {
  return parcels.map((parcel) => ({
    ...parcel,
    recipient: parcel.recipient ? parcel.recipient : {},
    status: parcelStatus(parcel),
  }));
};

export const formatParcelToModal = (parcel) => {
  return {
    ...parcel,
    started: parcel.start_date
      ? formatDate(parcel.start_date)
      : 'To be picked up',
    end: parcel.end_date ? formatDate(parcel.end_date) : 'To be delivered',
    url:
      parcel.signature && parcel.signature.url
        ? parcel.signature.url
        : 'https://api.adorable.io/avatars/50/abott@adorable.png',
  };
};
