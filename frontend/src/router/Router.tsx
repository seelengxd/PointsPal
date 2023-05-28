import { createBrowserRouter } from 'react-router-dom';
import Test from '../pages/MerchantsContent/Merchants';
import Home from '../pages/Home/Home';
import Merchant from '../pages/Home/Merchant/Merchant';
import { LoggedIn } from '../pages/LoggedIn';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/logged_in',
    element: <LoggedIn />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/merchant',
    element: <Merchant />,
  },
]);

export default Router;
