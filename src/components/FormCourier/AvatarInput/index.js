import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import api from '~/services/api';

import * as C from './styles';

import addImage from '~/assets/images/insert-photo.png';

const AvatarInput = () => {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]); //eslint-disable-line
  // registerField is linking the input with the form. So the form knows about this element

  const handleChange = async (event) => {
    const data = new FormData();

    data.append('file', event.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  };

  return (
    <C.Container>
      <label htmlFor="avatar">
        {preview ? (
          <C.AvatarImage src={preview} alt="user avatar" />
        ) : (
          <C.InsertImage>
            <img src={addImage} alt="add user avatar" />
            <figcaption>Add photo</figcaption>
          </C.InsertImage>
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </C.Container>
  );
};

export default AvatarInput;
