import '@/styles/reset.css';
import '@/styles/index.css';

import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from '@/router/router';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
