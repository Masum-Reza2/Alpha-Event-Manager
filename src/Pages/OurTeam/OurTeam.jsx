import { useLoaderData } from "react-router-dom"
import MemberCard from "../../Components/MemberCard/MemberCard";

const OurTeam = () => {
    const members = useLoaderData();

    return (
        <div className="w-[95%] gap-5 mx-auto grid  place-items-center py-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            {
                members.map((member, index) => <MemberCard key={index} member={member} />)
            }
        </div>
    )
}

export default OurTeam