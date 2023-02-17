import Layout from './components/Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import useRouteProtection from './hooks/useRouteProtection';

const router = createBrowserRouter(routes);

function App() {
  useRouteProtection();
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
