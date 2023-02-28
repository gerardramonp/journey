import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from '../routes/routes';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return isLoggedIn ? element : <Navigate to={Routes.login} replace={true} />;
};

export default ProtectedRoute;
