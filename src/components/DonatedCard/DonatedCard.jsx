const DonatedCard = ({card}) => {
    console.log(card)
    const {title, price, category, image, card_bg, category_bg, text_color} = card
    return (
        <div style={{backgroundColor: `${card_bg}`}} className="flex rounded-md">
            <div className="w-1/3">
                <img src={image} alt="" className="w-full h-full rounded-s-md"/>
            </div>
            <div className="w-2/3 p-5 space-y-3">
                <span style={{backgroundColor: `${category_bg}`, color: `${text_color}`}} className="text-sm px-4 py-2 rounded-sm">{category}</span>
                <h2 className="text-xl font-semibold">{title}</h2>
                <h6 style={{color: `${text_color}`}} className="font-semibold">{price}</h6>
                <button style={{backgroundColor: `${text_color}`}} className="text-white rounded-md px-4 py-2">View Details</button>
            </div>
        </div>
    );
};

export default DonatedCard;