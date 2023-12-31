import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {id, image, title, category, card_bg, category_bg, text_color} = card
    return (
        <Link to={`/details/${id}`}>
            <div style={{backgroundColor: `${card_bg}`}} className="rounded-md h-full">
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