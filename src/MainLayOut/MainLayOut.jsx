import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayOut = () => {

    return (
        <div className="md:w-[90%] mx-auto">
            <Navbar />
            <div className="min-h-[70vh] py-10">
                <Outlet />
            </div>
            footer here
        </div>
    )
}

export default MainLayOut