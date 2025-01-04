import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Packages from '../pages/Packages';
import ServiceDetails from '../pages/ServiceDetails';
import OffbeatPlaces from '../pages/OffbeatPlaces';
import ContactPage from '../pages/Contactpage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'packages',
        element: <Packages />,
      },
      {
        path: 'services/:id',
        element: <ServiceDetails />,
      },
      {
        path: 'offbeat-places',
        element: <OffbeatPlaces />,
      },
      {
        path: 'contact'
        element: <ContactPage />
      },
    ],
  },
]);