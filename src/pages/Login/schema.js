import * as Yup from 'yup';

// constants password length
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Password must be longer than 6 characteres.')
    .required('Password is required.'),
});

export default schema;
