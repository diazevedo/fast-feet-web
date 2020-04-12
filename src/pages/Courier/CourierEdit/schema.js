import * as Yup from 'yup';

// constants password length
const schema = Yup.object().shape({
  courier_id: Yup.number().required('Please select a courier.'),
  recipient_id: Yup.number().required('Please select a recipient.'),
  product: Yup.string()
    .min(2, 'A product name must be longer than 2 characteres.')
    .required('Product name  is required.'),
});

export default schema;
