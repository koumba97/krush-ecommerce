import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/category/:categoryName',
        Component: App,
    },
])

export default router
