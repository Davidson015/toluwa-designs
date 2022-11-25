import React from 'react'
import { Routes as DOMRoutes, Route } from 'react-router-dom';

import { Home } from './components';

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route
        exact
        path='/'
        element={<Home />}
      />

      {/* <Route
        exact
        path={`/${}`}
        element={}
      /> */}
    </DOMRoutes>
  )
}

export default Routes