import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home/Home';

import SignIn from '../pages/SignIn/SignIn';
import Registration from '../pages/Registration/Registration';
import Recipes from '../pages/Recipes/Recipes';

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
        path: '/recepies/:id',
        element: <Recipes />,
      },
    ],
  },
]);
export default router;
