import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Parcel from '~/pages/Parcel';
import ParcelEdit from '~/pages/Parcel/ParcelEdit';

function Couriers() {
  return <h1>Couriers</h1>;
}

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/parcel/edit/:id" component={ParcelEdit} isPrivate />
      <Route path="/parcel" component={Parcel} isPrivate />
      <Route path="/couriers" component={Couriers} isPrivate />
      <Route path="/" component={() => <h1>not foun</h1>} />
    </Switch>
  );
}
