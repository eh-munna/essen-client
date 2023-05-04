import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home/Home';

import SignIn from '../pages/SignIn/SignIn';
import Registration from '../pages/Registration/Registration';
import Recipes from '../pages/Recipes/Recipes';
import Blogs from '../pages/Blogs/Blogs';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/recipes/:id',
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
]);
export default router;
