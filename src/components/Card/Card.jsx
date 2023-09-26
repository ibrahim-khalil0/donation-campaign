import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {image, title, category, card_bg, category_bg, text_color} = card
    console.log(card)
    return (
        <Link to={"/details"}>
            <div style={{backgroundColor: `${card_bg}`}} className="rounded-md">
                <img src={image} alt="" className="w-full h-40"/>
                <div className="p-3">
                    <span style={{backgroundColor: `${category_bg}`, color: `${text_color}`}} className="text-sm p-1 rounded-md">{category}</span>
                    <h1 style={{color: `${text_color}`}} className="text-xl font-medium">{title}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Card;