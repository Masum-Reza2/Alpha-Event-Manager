import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import DetailsService from "../Components/DetailsService/DetailsService"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import OurTeam from "../Pages/OurTeam/OurTeam"
import Menus from "../Pages/Menus/Menus"
import Venus from "../Pages/Venus/Venus"

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
            },
            { path: '/ourTeam', loader: () => fetch('/ourTeam.json'), element: <PrivateRoute><OurTeam /></PrivateRoute> },
            { path: '/menus', loader: () => fetch('/menus.json'), element: <PrivateRoute><Menus /></PrivateRoute> },
            { path: '/venus', loader: () => fetch('/venus.json'), element: <PrivateRoute><Venus /></PrivateRoute> },
        ]
    }
])

export default Route