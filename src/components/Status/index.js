import React from 'react';

import * as C from './styles';

export default function Status({ status }) {
  return <C.Status status={status}>{status}</C.Status>;
}
