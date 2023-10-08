import { Toaster } from "react-hot-toast"
import Slider from "../../Components/Slider/Slider"
import { useLoaderData } from "react-router-dom"
import OurServices from "../../Components/OurServices/OurServices";
import Footer from "../../Components/Footer/Footer";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Gallery from "../../Components/Gallery/Gallery";
import Ourclients from "../../Components/OurClients/Ourclients";

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Toaster />
            <Slider services={services} />
            <OurServices services={services} />
            <WhyUs />
            <Gallery />
            <Ourclients />
            <Footer />
        </div>
    )
}

export default Home