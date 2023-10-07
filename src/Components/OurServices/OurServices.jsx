import PropTypes from 'prop-types';
import ServiceCard from '../ServiceCard/ServiceCard';
import { FaHandsHelping } from 'react-icons/fa';

const OurServices = ({ services }) => {
    return (
        <div className='pt-10 text-center'>
            <h1 className='font-semibold text-lg md:text-xl underline relative w-fit mx-auto'>Our Services<FaHandsHelping className='absolute -left-7 bottom-0 text-2xl' /></h1>
            <div className='grid  pt-5 gap-5 px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {
                    services.map((service, index) => <ServiceCard key={index} service={service} />)
                }
            </div>
        </div>
    )
}

OurServices.propTypes = {
    services: PropTypes.array,
}
export default OurServices