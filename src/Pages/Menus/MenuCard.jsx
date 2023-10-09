import PropTypes from 'prop-types';

const MenuCard = ({ menu }) => {
    const { name, img } = menu;
    return (
        <div className='h-full w-full relative cursor-pointer rounded-lg'>
            <img className='menuItem h-full w-full rounded-lg brightness-75 hover:brightness-50 transition-all duration-300 hover:scale-105' src={img} alt={`image of ${name}`} />
            <h5 className='title absolute top-1/2 text-center w-full text-white brightness-150 text-3xl md:text-4xl hover:brightness-200 hover:text-purple-500 font-extrabold transition-all duration-300 hover:scale-105'>{name}</h5>
        </div>
    )
}

MenuCard.propTypes = {
    menu: PropTypes.object,
}
export default MenuCard