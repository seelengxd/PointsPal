import { createBrowserRouter } from 'react-router-dom';
import Test from '../pages/Test/Test';
import Home from '../pages/Home/Home';
import Merchant from '../pages/Home/Merchant/Merchant';

const Router = createBrowserRouter([
  {
    path: '/',
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
