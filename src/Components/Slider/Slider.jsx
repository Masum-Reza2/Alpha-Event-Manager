import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import useGlobal from '../../Hooks/useGlobal';

const Slider = ({ services }) => {
    const { user } = useGlobal()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className={`bg-black text-gray-400  py-5 ${user && 'mt-5'}`}>
            <h1 className='text-center pb-3 font-extrabold text-lg md:text-2xl'>Your Event , Our Responsibility.</h1>
            <Carousel
                arrows={false}
                pauseOnHover={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    services.map((service, index) => {
                        let { image_team, name } = service
                        return <div className='mx-2 rounded-xl h-[70vh]' key={index}>
                            <img className='h-full w-full rounded-xl' src={image_team} alt={`image of ${name}`} />
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}

Slider.propTypes = {
    services: PropTypes.array,
}
export default Slider