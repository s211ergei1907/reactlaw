
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Main } from './view/pages/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  }
]);

export function App() {
  return (
    <RouterProvider router={router} />
  );
}

