import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Parcel from '~/pages/Parcel';
import ParcelEdit from '~/pages/Parcel/ParcelEdit';
import ParcelCreate from '~/pages/Parcel/ParcelCreate';
import Courier from '~/pages/Courier';
import CourierCreate from '~/pages/Courier/CourierCreate';
import CourierEdit from '~/pages/Courier/CourierEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/parcel/create/" component={ParcelCreate} isPrivate />
      <Route path="/parcel/edit/" component={ParcelEdit} isPrivate />
      <Route path="/parcel" component={Parcel} isPrivate />

      <Route path="/courier/edit" component={CourierEdit} isPrivate />
      <Route path="/courier/create" component={CourierCreate} isPrivate />
      <Route path="/courier" component={Courier} isPrivate />
      <Route path="/" component={() => <h1>not foun</h1>} />
    </Switch>
  );
}
