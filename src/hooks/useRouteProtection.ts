import { useEffect } from 'react';
import { Routes } from '../routes/routes';

const useRouteProtection = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn && window.location.pathname !== Routes.login) {
      window.location.pathname = Routes.login;
    }
  }, [window.location.pathname]);
};

export default useRouteProtection;
