import React, { useState, useEffect, useMemo, Suspense, ReactNode, ReactElement } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { useSelectorUser } from '~/store/selectors/user';

// import the styles

import routes from '~/router';

import ScrollToTopBtn from '~/components/Button/ScrollToTop';
interface RouteProps {
  children: ReactElement;
}
const ProtectedRoute = ({ children }: RouteProps): ReactElement | null => {
  const location = useLocation();
  const user = useSelectorUser();
  console.log(34534534, user);
  return <>{user ? children : <Navigate to="/login" state={{ from: location }} replace />}</>;
};
const GuestRoute = ({ children }: RouteProps): ReactElement | null => {
  const location = useLocation();
  const user = useSelectorUser();
  return <>{user && user.isActive ? <Navigate to="/" state={{ from: location }} replace /> : children}</>;
};

const App = () => {
  return (
    <Suspense fallback={<Spinner size="xl" alignItems={'center'} justifyContent={'center'} />}>
      <Routes>
        {routes.map(item => {
          const Layout = item.layout || React.Fragment;
          const Component = item.component;

          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                Layout ? (
                  item.protected ? (
                    <ProtectedRoute>
                      <Layout>{Component}</Layout>
                    </ProtectedRoute>
                  ) : (
                    <GuestRoute>
                      <Layout>{Component}</Layout>
                    </GuestRoute>
                  )
                ) : (
                  Component
                )
              }
            />
          );
        })}
      </Routes>
      <ScrollToTopBtn />
    </Suspense>
  );
};
export default App;
