import venuImg from '../../assets/images/venus/venus.jpg'
import VenuCard from './VenuCard'
import MessageUs from '../../Components/MessageUs/MessageUs'
import Footer from '../../Components/Footer/Footer'
import { useLoaderData } from 'react-router-dom'

const Venus = () => {
    const venus = useLoaderData();


    return (
        <div>
            <div className="w-[90%] mx-auto">
                <div className="h-[50vh] md:h-[80vh] rounded-lg mt-5 relative flex flex-col items-center justify-center">
                    <img className="h-[50vh] md:h-[80vh] w-full absolute rounded-lg brightness-50 -z-20" src={venuImg} alt="manuImg" />
                    <h1 className='text-white text-5xl md:text-9xl font-extrabold'>Venus</h1>
                    <p className='text-white text-sm md:text-base lg:text-lg px-10 md:px-40 lg:px-64'>We offer our expertise in the area of choosing the perfect site having had the privilege to cater and plan magnificent events at some of New York’s most beautiful public and private venues over the past 35 years.</p>
                </div>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-10'>
                    {
                        venus?.map((venu, index) => <VenuCard key={index} venu={venu} />)
                    }
                </div>

                <MessageUs />

            </div>
            <Footer />
        </div>
    )
}

export default Venus