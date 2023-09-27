import BannerBg from '../../assets/banner.png'
import { getSearchValue } from '../utility/utility';
const Banner = ({cards, setCard}) => {
    return (
        <div style={{backgroundImage: `url(${BannerBg})`}} className="mt-[-200px] sm:mt-[-155px] bg-cover">
            <div className="pt-60 pb-60 text-center px-[10%] mx-auto bg-[#ffffffeb]">
                <h1 className="text-3xl sm:text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                <div>
                    <input className="border-y-2 border-l-2 border-gray-200 p-2 w-2/4 md:w-1/4 outline-none text-base rounded-s-lg" placeholder="Search here..." type="text" id="search"/>
                    <button onClick={ () => getSearchValue(cards, setCard)} id="searchBtn" className="bg-[#FF4349] text-base py-2 px-4 border-2 border-[#FF4349] rounded-e-lg text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;