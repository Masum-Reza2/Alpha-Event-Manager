import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Spinner from "../Components/Spinner/Spinner";

const MainLayOut = () => {
    const navigation = useNavigation();
    console.log(navigation)

    return (
        <div className="md:w-[90%] mx-auto scroll-smooth">
            <Toaster />
            <Navbar />
            {
                navigation.state === 'loading' ?
                    <Spinner />
                    :
                    <div className="min-h-[70vh] py-2">
                        <Outlet />
                    </div>
            }

        </div>
    )
}

export default MainLayOut