import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MxAcapulco from '../pages/Mexico/MxAcapulco';
import MxHome from '../pages/Mexico/MxHome';
import MxPuebla from '../pages/Mexico/MxPuebla';
import NotFound from '../pages/NotFound';

export enum Routes {
  home = '/',
  login = '/login',
  mexicoHome = '/mexico',
  mexicoPuebla = '/mexico/puebla',
  mexicoAcapulco = '/mexico/acapulco',
}

export const routes: RouteObject[] = [
  {
    path: Routes.home,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: Routes.login,
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: Routes.mexicoHome,
    element: <MxHome />,
    errorElement: <NotFound />,
  },
  {
    path: Routes.mexicoPuebla,
    element: <MxPuebla />,
    errorElement: <NotFound />,
  },
  {
    path: Routes.mexicoAcapulco,
    element: <MxAcapulco />,
    errorElement: <NotFound />,
  },
];
