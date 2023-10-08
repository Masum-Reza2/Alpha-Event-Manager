import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import DetailsService from "../Components/DetailsService/DetailsService"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            // normal routes
            { path: '/', loader: () => fetch('/services.json'), element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },

            // private routes
            {
                path: 'details/:id', loader: () => fetch('/services.json'),
                element: <PrivateRoute><DetailsService /></PrivateRoute>
            }
        ]
    }
])

export default Route