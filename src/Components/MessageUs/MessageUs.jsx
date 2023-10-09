import useGlobal from "../../Hooks/useGlobal"

const MessageUs = () => {
    const { user } = useGlobal();
    return (
        <div>
            <div className="">

                <div className="h-[60vh] space-y-5 rounded-lg bg-black flex flex-col items-center justify-center">

                    <div className="text-white btn btn-outline text-2xl md:text-4xl">
                        Aplha mgt How we manage your events!
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