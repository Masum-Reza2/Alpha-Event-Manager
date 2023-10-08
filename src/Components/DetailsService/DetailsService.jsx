import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import useGlobal from "../../Hooks/useGlobal";
import moment from "moment/moment";

const DetailsService = () => {
    const [targetDetails, setTargetDetails] = useState({})
    const { image_author, description, name, price } = targetDetails;
    const { user } = useGlobal()


    const services = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const requireDetails = services.find(service => service.id == id);
        setTargetDetails(requireDetails)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-5">
            <div className="relative flex max-w-[24rem] md:max-w-[42rem] flex-col rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md px-2 md:px-0">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="rounded-lg"
                        src={image_author}
                        alt={`image of ${name}`}
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <p className="mt-3 block font-sans text-justify md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                        <img
                            alt="natali craig"
                            src={user?.photoURL}
                            className="relative inline-block h-16 w-16 rounded-full border-2 border-white object-cover object-center hover:z-10"
                            data-tooltip-target="author-1"
                        />
                        <p className="translate-x-5 font-semibold">{user?.displayName}</p>
                    </div>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {moment().format("dddd, D MMMM YYYY")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailsService