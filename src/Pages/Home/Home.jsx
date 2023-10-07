import { Toaster } from "react-hot-toast"
import Slider from "../../Components/Slider/Slider"
import { useLoaderData } from "react-router-dom"

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <Toaster />
            <Slider services={services} />
        </div>
    )
}

export default Home