import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {

    const [donationCard, setDonationCard] = useState([])

    useEffect( () => {

        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonationCard(data))

    }, [])
    return (
        <div>
            <Banner cards={donationCard} setCard={setDonationCard}></Banner>
            <div className="px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-28 pb-40">
                {
                    donationCard.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;