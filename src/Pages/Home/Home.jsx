import { Toaster } from "react-hot-toast"
import Slider from "../../Components/Slider/Slider"
import { useLoaderData } from "react-router-dom"
import OurServices from "../../Components/OurServices/OurServices";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Toaster />
            <Slider services={services} />
            <OurServices services={services} />
            <Footer />
        </div>
    )
}

export default Home