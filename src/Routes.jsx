import React from 'react'
import { Routes as DOMRoutes, Route } from 'react-router-dom';

import { Home } from './components';

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route
        exact
        path='/'
        component={Home}
      />

      {/* <Route
        exact
        path={`/${}`}
        component={}
      /> */}
    </DOMRoutes>
  )
}

export default Routes