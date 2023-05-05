import { createBrowserRouter } from 'react-router-dom';
import { Main, Request, SignUp, SignIn } from '../view/pages';
import { PATHS } from '../domain/paths/paths';

export const baseRouter = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Main />
    },
    {
        path: PATHS.SIGN_IN,
        element: <SignIn />
    },
    {
        path: PATHS.SIGN_UP,
        element: <SignUp />
    },
    {
        path: PATHS.REQUESTS,
        element: <Request />
    }
]);
