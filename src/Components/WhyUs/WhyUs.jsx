import WhyUsCard from "./WhyUsCard"

const whyUsInfo = [
    {
        img: 'https://i.ibb.co/fkK5mcF/exclusivedesign.jpg',
        title: 'Exclusive Design',
        desc: 'Elevate your events with captivating and exclusive designs.'
    },
    {
        img: 'https://i.ibb.co/NrkPWjt/clientfocused.jpg',
        title: 'Client Focused',
        desc: `Your vision is our priority; we're dedicated to your satisfaction.`
    },
    {
        img: 'https://i.ibb.co/nsFTdkq/frshfood.jpg',
        title: 'Fresh Ingredients',
        desc: 'We create delightful experiences with the freshest ingredients.'
    },
    {
        img: 'https://i.ibb.co/ZS60W7z/clientbase.jpg',
        title: 'Diverse Client Base',
        desc: 'Our expertise caters to a wide range of events and preferences.'
    },
    {
        img: 'https://i.ibb.co/wcK1wv7/responsive.jpg',
        title: 'Responsible Sourcing',
        desc: `We're committed to eco-friendly and ethical event solutions.`
    },
    {
        img: 'https://i.ibb.co/xjt5pRc/flexibleservice.jpg',
        title: 'Flexible Services',
        desc: 'Tailored event planning to meet your unique needs.'
    },
]

const WhyUs = () => {
    return (
        <div className="py-10 w-[90%] mx-auto space-y-5" data-aos="fade-down">
            <div className="border"></div>
            <h1 className="text-2xl md:text-5xl">Why Us?</h1>
            <p className="text-sm md:text-base">FOR ALL YOUR CATERING NEEDS.</p>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {
                    whyUsInfo.map((whyUs, index) => <WhyUsCard whyUs={whyUs} key={index} />)
                }
            </div>
        </div>
    )
}

export default WhyUs