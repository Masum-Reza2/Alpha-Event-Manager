import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, name, image_author, price, description } = service;

    return (
        <div className="card flex flex-col h-full w-full  bg-base-100 shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:bg-red-100 hover:shadow-pink-50"
            data-aos="zoom-in"
            data-aos-duration="1000"
        >
            <figure><img className='h-full md:h-[50vh] w-full' src={image_author} alt={`image of ${name}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="text-left font-semibold text-gray-600">Price : {price} tk only!</h2>
                <p className='text-justify text-gray-500'>{description.slice(0, 140)}...<Link className='text-blue-500 font-bold ml-2 ' to={`details/${id}`}>Read More</Link></p>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard