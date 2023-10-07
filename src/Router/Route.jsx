import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />
    }
])

export default Route