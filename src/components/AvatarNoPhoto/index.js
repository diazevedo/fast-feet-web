import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

const AvatarNoPhoto = ({ name }) => (
  <C.ImageWithInitials>
    <C.Initials>{name}</C.Initials>
  </C.ImageWithInitials>
);

export default AvatarNoPhoto;

AvatarNoPhoto.propTypes = {
  name: PropTypes.string.isRequired,
};
