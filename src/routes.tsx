import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Landing from './pages/Landing';
import DemoReels from './pages/DemoReels';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Youtube from './pages/Youtube';

const router = createBrowserRouter([
    {
       path: '/',
       element: <App />,
       children: [
        { path: '/', element: <Landing /> },
        { path: '/demo-reels', element: <DemoReels /> },
        { path: '/resume', element: <Resume /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '/youtube', element: <Youtube /> },
       ],
    },
]);

export default router;
