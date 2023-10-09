import { useEffect, useState } from 'react'
import manuImg from '../../assets/images/menus/menus.jpg'
import MenuCard from './MenuCard'
import MessageUs from '../../Components/MessageUs/MessageUs'
import Footer from '../../Components/Footer/Footer'

const Menus = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('/menus.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    console.log(menus)
    return (
        <div>
            <div className="w-[90%] mx-auto">
                <div className="h-[50vh] md:h-[80vh] rounded-lg mt-5 relative flex flex-col items-center justify-center">
                    <img className="h-[50vh] md:h-[80vh] w-full absolute rounded-lg brightness-50 -z-20" src={manuImg} alt="manuImg" />
                    <h1 className='text-white text-5xl md:text-9xl font-extrabold'>Menus</h1>
                    <p className='text-white text-sm md:text-base lg:text-lg px-10 md:px-40 lg:px-64'>We offer a variety of delicious, seasonal menus that are rooted in West Coast flavours, with an emphasis on fresh, local, sustainable ingredients.</p>
                </div>

                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center py-10'>
                    {
                        menus?.map((menu, index) => <MenuCard key={index} menu={menu} />)
                    }
                </div>

                <MessageUs />
            </div>
            <Footer />
        </div>
    )
}

export default Menus