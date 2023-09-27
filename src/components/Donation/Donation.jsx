import { useLoaderData } from "react-router-dom";
import { getAllDonation } from "../utility/utility";
import DonatedCard from "../DonatedCard/DonatedCard";
import { useState } from "react";

const Donation = () => {
    
    const allDonation = useLoaderData()


    const allDonationsId = getAllDonation()

    const [displayCard, setDisplayCard] = useState(4)
    const donateList = []

    const [seeAll, setSeeAll] = useState(true)
    const hideBtn = () => {
        setSeeAll(false)
        setDisplayCard(allDonationsId.length)
    }

    for(const donateId of allDonationsId.slice(0, displayCard)){
        const donatedData = allDonation.find(data => data.id == donateId)
        donateList.push(donatedData)
    }

   
    return (
        <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-2 gap-5 pb-14">
                {
                    donateList.map( donate => <DonatedCard key={donate.id} card={donate}></DonatedCard>)
                }
            </div>
            {
                seeAll && <div className={ allDonationsId.length < 4 ? "hidden" : 'text-center pb-14'}>
                <button onClick={hideBtn} className="text-white bg-black rounded-md px-6 py-2">See All</button>
            </div>
            }
            
        </div>
    );
};

export default Donation;