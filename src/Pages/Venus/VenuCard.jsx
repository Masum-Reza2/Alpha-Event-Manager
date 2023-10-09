import PropTypes from 'prop-types';

const VenuCard = ({ venu }) => {
    const { img, title, desc } = venu;
    return (
        <div className='h-full w-full border cursor-pointer pb-3 rounded-lg transition-all duration-500 hover:bg-blue-100 lg:hover:scale-125'>
            <div>
                <img className='md:h-[50vh] w-full rounded-lg' src={img} alt="" />
            </div>
            <div className='text-center mt-2'>
                <h5 className='font-semibold'>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    )
}

VenuCard.propTypes = {
    venu: PropTypes.object,
}
export default VenuCard