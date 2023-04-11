import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../App';
import Missions from '../pages/Missions';
import Rockets from '../pages/Rockets';

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
        path: 'rockets',
        element: <Rockets />,
      },
    ],
  },
]);

export default router;
