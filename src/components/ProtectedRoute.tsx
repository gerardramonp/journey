import { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ path, element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
