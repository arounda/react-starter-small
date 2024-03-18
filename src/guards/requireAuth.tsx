import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getCookies } from '@/cookies';

const RequireAuth: FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = getCookies('bearerToken');

  if (!isAuthenticated) {
    return <Navigate to={`/`} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
