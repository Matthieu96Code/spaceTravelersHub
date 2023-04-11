import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../App';
import { Missions, Profile } from '../pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
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
