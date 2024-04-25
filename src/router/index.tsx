import { lazy, ReactNode, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import BaseLayoutAuth from '~/layout/BaseLayoutAuth';
import BaseLayout from '~/layout/BaseLayout';

const Login = lazy(() => import('~/components/FormAuth/Login'));
const Register = lazy(() => import('~/components/FormAuth/Register'));
const ForgotPassword = lazy(() => import('~/components/FormAuth/ForgotPassword'));
const DetailUser = lazy(() => import('~/pages/DetailUser'));
const NotFound = lazy(() => import('~/pages/NotFound'));
const Blog = lazy(() => import('~/components/Card'));
const Detail = lazy(() => import('~/components/Blog'));
export default [
  {
    path: `/login`,
    component: <Login />,
    layout: BaseLayoutAuth,
    protected: false
  },
  {
    path: `/register`,
    component: <Register />,
    layout: BaseLayoutAuth,
    protected: false
  },
  {
    path: `/forgot-password`,
    component: <ForgotPassword />,
    layout: BaseLayoutAuth,
    protected: false
  },
  {
    path: `/detail-user`,
    component: <DetailUser />,
    layout: BaseLayout,
    protected: true
  },
  {
    path: `/*`,
    component: <NotFound />,
    protected: false
  },
  {
    path: `/`,
    component: <Blog />,
    layout: BaseLayout,
    protected: true
  },
  {
    path: `/detail`,
    component: <Detail />,
    layout: BaseLayout,
    protected: true
  }
];
