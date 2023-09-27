import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
const Header = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-5 justify-between w-[90%] mx-auto items-center py-10'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className='flex gap-12 text-lg'>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/donation"}>Donation</NavLink></li>
                    <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Header;