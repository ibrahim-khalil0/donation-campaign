import { useLoaderData } from "react-router-dom";
import { getAllDonation } from "../utility/utility";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donation = () => {
    const allDonationsId = getAllDonation()
    const allDonation = useLoaderData()

    const donateList = []

    for(const donateId of allDonationsId){
        const donatedData = allDonation.find(data => data.id == donateId)
        donateList.push(donatedData)
    }
   
    return (
        <div className="w-[90%] mx-auto grid grid-cols-2 gap-5">
            {
                donateList.map( donate => <DonatedCard key={donate.id} card={donate}></DonatedCard>)
            }
        </div>
    );
};

export default Donation;