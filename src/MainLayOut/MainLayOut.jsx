import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {

    return (
        <div className="md:w-[90%] mx-auto scroll-smooth">
            <Toaster />
            <Navbar />
            <div className="min-h-[70vh] py-2">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayOut