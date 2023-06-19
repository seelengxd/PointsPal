import { createBrowserRouter } from 'react-router-dom';
import ConsumerHome from '../pages/ConsumerHome/ConsumerHome';
import Home from '../pages/Home/Home';
import Merchant from '../pages/Home/Merchant/Merchant';
import { LoggedIn } from '../pages/LoggedIn';
import { Login } from '../pages/Authentication/Login';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logged_in',
    element: <LoggedIn />,
  },
  {
    path: '/merchants',
    element: <ConsumerHome />,
  },
  {
    path: '/merchant/*',
    element: <Merchant />,
  },
]);

export default Router;
