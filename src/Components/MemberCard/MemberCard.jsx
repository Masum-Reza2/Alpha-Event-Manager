import PropTypes from 'prop-types';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
const MemberCard = ({ member }) => {

    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all duration-500 cursor-pointer hover:bg-red-50">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img className='h-full w-full' src={member?.img} alt={`Image of ${member?.name}`} />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {member?.name}
                    </h4>
                    <p className="block text-gray-500 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        {member?.profession}
                    </p>
                    <p className="text-xs h-10">
                        {member?.description}
                    </p>
                </div>
                <div className="flex justify-center gap-7 p-6 pt-2 text-lg">
                    <BsFacebook className="text-blue-600 font-bold cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                    <BsTwitter className="text-sky-600 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                    <AiFillInstagram className="text-purple-500 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-125" />
                </div>
            </div>
        </div>
    )
}


MemberCard.propTypes = {
    member: PropTypes.object,
}
export default MemberCard