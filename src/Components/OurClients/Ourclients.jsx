import Marquee from "react-fast-marquee";
import client1 from '../../assets/clients/client (1).png'
import client2 from '../../assets/clients/client (2).png'
import client3 from '../../assets/clients/client (3).png'
import client4 from '../../assets/clients/client (4).png'
import client5 from '../../assets/clients/client (5).png'
import client6 from '../../assets/clients/client (6).png'
import client7 from '../../assets/clients/client (7).png'
import client8 from '../../assets/clients/client (8).png'
import client9 from '../../assets/clients/client (9).png'
import client10 from '../../assets/clients/client (10).png'
import client11 from '../../assets/clients/client (11).png'
import client12 from '../../assets/clients/client (12).png'
import client13 from '../../assets/clients/client (13).png'
import client14 from '../../assets/clients/client (14).png'
import client15 from '../../assets/clients/client (15).png'

const Ourclients = () => {
    return (
        <div className="mt-10 border-y shadow-sm">
            <h1 className="text-center text-2xl md:text-4xl underline">Our Clients</h1>
            <Marquee pauseOnHover={true} speed={40} className="pb-2">
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client1} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client2} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client3} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client4} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client5} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client6} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client7} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client8} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client9} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client10} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client11} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client12} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client13} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client14} alt="" />
                <img className="w-[50px] md:w-[100px] ml-10 md:ml-20" src={client15} alt="" />
            </Marquee>
        </div>
    )
}

export default Ourclients