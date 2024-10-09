
import menu from "../../assets/icons/menu.svg";

import flag from "../../assets/icons/flag.svg"
const Navbar = () => {
    return (
        <div className="h-[56px] flex items-center justify-between">
            <ul className="flex gap-x-[28px] tetx-[16px] font-medium">
                <li><a href="#" className="flex gap-x-[6px]"><img src={menu} alt="menu" /> All cetegory</a></li>
                <li><a href="#">Hot offers</a></li>
                <li><a href="#">Gift boxes</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Menu item</a></li>
                <li>
                    <select className="outline-none w-[60px]">
                        <option value="Help" disabled selected>Help</option>
                        <option value="About">About</option>
                        <option value="Contact">Contact</option>
                        <option value="Connection">Connection</option>
                    </select>
                </li>
            </ul>
            <ul className="flex gap-x-[32px]">
                <li>
                    <select className="outline-none font-medium text-[16px]">
                        <option value="English, USD" disabled selected>English, USD</option>
                        <option value="Russia, RUBL">Russia, RUBL</option>
                        <option value="UZB, SUM">Uzb, SUM</option>
                    </select>
                </li>
                <li>
                    <select className="outline-none font-medium text-[16px]">
                        <option value="Ship to" disabled selected>Ship to <img src={flag} alt="flag" /></option>
                        <option >Ship to</option>
                        <option >Ship to</option>
                    </select>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;