import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { id, name, image_author, price, description } = service;

    return (
        <div className="card flex flex-col h-full w-full  bg-base-100 shadow-xl">
            <figure><img className='h-full md:h-[50vh] w-full' src={image_author} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{description.slice(0, 140)}...<Link className='text-blue-500 font-bold ml-2 '>Read More</Link></p>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard