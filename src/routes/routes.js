import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../App';
import Missions from '../pages/Missions';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'missions',
        element: <Missions />,
      },
    ],
  },
]);

export default router;
