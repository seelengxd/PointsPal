import { createBrowserRouter } from 'react-router-dom';
import Test from '../pages/Test/Test';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
  {
    path: '/about',
    element: <h1>About</h1>,
  },
]);

export default Router;
