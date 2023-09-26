import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonate } from "../utility/utility";


const Details = () => {
    const donate = useLoaderData();
    const {id} = useParams();
    const donateDetails = donate.find(detail => detail.id == id);
    const {image, title, price, details, text_color} = donateDetails

    const donateToast = () => {
        
        saveDonate(id, toast)
    }

    
    return (
        <div className="w-[90%] mx-auto relative mb-12">
            <div>
                <img src={image} alt="" className="w-full h-[600px] rounded-lg"/>
            </div>
            <div className="bg-[#0000007a] absolute bottom-0 w-full rounded-b-lg p-6">
                <button onClick={donateToast} style={{backgroundColor: `${text_color}`}} className="rounded-md py-2 px-3 text-lg text-white font-medium">Donate {price}</button>
            </div>
            <div className="absolute mt-24">
                <h1 className="text-4xl font-bold mb-10">{title}</h1>
                <p className="text-base font-normal leading-8 mb-32">{details}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;