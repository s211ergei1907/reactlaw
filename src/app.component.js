import { RouterProvider } from 'react-router-dom';
import { baseRouter } from './routes/router';

export function App() {
    return <RouterProvider router={baseRouter} />;
}
