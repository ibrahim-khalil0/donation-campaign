import BannerBg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${BannerBg})`}} className="mt-[-155px] bg-cover">
            <div className="pt-60 pb-60 text-center px-[10%] mx-auto bg-[#ffffffeb]">
                <h1 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                <div>
                    <input className="border-y-2 border-l-2 border-gray-200 p-2 w-1/4 outline-none text-base rounded-s-lg" placeholder="Search here..." type="text" id="search"/>
                    <button id="searchBtn" className="bg-[#FF4349] text-base py-2 px-4 border-2 border-[#FF4349] rounded-e-lg text-white">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;