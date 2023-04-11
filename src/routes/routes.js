import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../App';
import { Missions, Profile, NotFoundPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'missions',
        element: <Missions />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
