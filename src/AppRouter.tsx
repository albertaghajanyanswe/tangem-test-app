import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './configs';
import HomePage from './pageComponents/homePage';
import Layout from './components/layout';

function AppRouter() {

  return (
    <Routes>
      <Route path={routes.home.path} element={<Layout><HomePage /></Layout>} />
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
}

export default AppRouter;
