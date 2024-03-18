import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout';

import { RoutePath } from './routes';

const Home = lazy(() =>
  import('../components/Pages/Home/Home').then((module) => ({
    default: module.Home,
  })),
);
const NotFound = lazy(() =>
  import('../components/Pages/NotFound/NotFound').then((module) => ({
    default: module.NotFound,
  })),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${RoutePath.HOME}`} replace />,
      },
      {
        path: `/${RoutePath.HOME}`,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: `/${RoutePath.NOT_FOUND}`,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
    errorElement: <Navigate to={`/${RoutePath.NOT_FOUND}`} replace />,
  },
]);

export default router;
