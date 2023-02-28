import { RouteObject } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MxAcapulco from '../pages/Mexico/MxAcapulco';
import MxHome from '../pages/Mexico/MxHome';
import MxPuebla from '../pages/Mexico/MxPuebla';
import Notes from '../pages/Notes/Notes';
import NotFound from '../pages/NotFound';

export enum Routes {
  home = '/',
  login = '/login',
  notes = '/notes',
  mexicoHome = '/mexico',
  mexicoPuebla = '/mexico/puebla',
  mexicoAcapulco = '/mexico/acapulco',
}

export const routes: RouteObject[] = [
  {
    path: Routes.home,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: Routes.login,
        element: <Login />,
      },
      {
        path: Routes.notes,
        element: <ProtectedRoute element={<Notes />} />,
      },
      {
        path: Routes.home,
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: Routes.mexicoHome,
        element: <ProtectedRoute element={<MxHome />} />,
      },
      {
        path: Routes.mexicoPuebla,
        element: <ProtectedRoute element={<MxPuebla />} />,
      },
      {
        path: Routes.mexicoAcapulco,
        element: <ProtectedRoute element={<MxAcapulco />} />,
      },
    ],
  },
];
