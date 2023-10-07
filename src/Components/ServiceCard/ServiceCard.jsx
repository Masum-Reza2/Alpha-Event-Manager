import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
    const { id, name, image_author, price, description } = service;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='h-full md:h-[50vh] w-full' src={image_author} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {/* <p className='text-justify'>{description}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-black">Details</button>
                </div>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    services: PropTypes.object,
}

export default ServiceCard