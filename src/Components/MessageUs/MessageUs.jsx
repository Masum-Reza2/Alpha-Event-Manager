import useGlobal from "../../Hooks/useGlobal"

const MessageUs = () => {
    const { user } = useGlobal();
    return (
        <div>
            <div>

                <div className="h-[80vh] lg:h-[60vh] space-y-5 rounded-lg bg-black flex flex-col items-center justify-center">

                    <div className="text-white text-center text-2xl md:text-4xl outline px-3 py-1 rounded-md outline-white mx-5">
                        Alpha mgt your event our responsibility!
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                            {user?.displayName}
                        </h5>
                        <img
                            alt={`image of ${user?.displayName}`}
                            src={user?.photoURL}
                            className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                        />
                    </div>

                    <div className="text-white">
                        <p className="btn btn-outline btn-primary">Contact us</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MessageUs