import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/hu" replace />,
    },

    {
        path: '/:lang',
        element: <Home />,
    },

    {
        path: '*',
        element: <Navigate to="/hu" replace />,
    },
])