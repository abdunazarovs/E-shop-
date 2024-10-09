
import "./style.scss";

import logo from "../../assets/icons/logo.svg";
import app from "../../assets/images/appstore.png";
import google from "../../assets/images/google.png";
const index = () => {
    return (
        <footer>

            <div>
                <div className="container">
                    <div className="flex justify-between py-[50px]">
                        <div>
                            <img className="mb-[5px]" src={logo} alt="logo" />
                            <p className="text-[16px] w-[276px] mb-5">Best information about the company gies here but now lorem ipsum is</p>
                            <div className="flex gap-x-2">
                                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center"><i className='bx bxl-facebook text-white text-[26px]' ></i></span>
                                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center"><i className='bx bxl-twitter text-white text-[26px]'></i></span>
                                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center"><i className='bx bxl-linkedin text-white text-[26px]'></i></span>
                                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center"><i className='bx bxl-instagram text-white text-[26px]'></i></span>
                                <span className="bg-[#BDC4CD] hover:bg-blue-500 duration-200 cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center"><i className='bx bxl-youtube text-white text-[26px]'></i></span>
                            </div>
                        </div>

                        <ul className="text-[#8B96A5] text-[16px]">
                            <li className="font-medium text-black mb-[10px]">About</li>
                            <li>About Us</li>
                            <li>Find store</li>
                            <li>Categories</li>
                            <li>Blogs</li>
                        </ul>
                        <ul className="text-[#8B96A5] text-[16px]">
                            <li className="font-medium text-black mb-[10px]">Partnership</li>
                            <li>About Us</li>
                            <li>Find store</li>
                            <li>Categories</li>
                            <li>Blogs</li>
                        </ul>
                        <ul className="text-[#8B96A5] text-[16px]">
                            <li className="font-medium text-black mb-[10px]">Information</li>
                            <li>Help Center</li>
                            <li>Money Refund</li>
                            <li>Shipping</li>
                            <li>Contact us</li>
                        </ul>
                        <ul className="text-[#8B96A5] text-[16px]">
                            <li className="font-medium text-black mb-[10px]">For users</li>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Settings</li>
                            <li>My Orders</li>
                        </ul>
                        <ul>
                            <li className="font-medium text-black mb-[10px]">Get app</li>
                            <li className="mb-[8px]"><img src={app} alt="pic" /></li>
                            <li><img src={google} alt="pic" /></li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className="bg-[#EFF2F4] py-[23px]">  
                <div className="container"> 
                    <div className="flex items-center justify-between">
                         <p className="text-[16px]">© 2023 Ecommerce.</p>
                         <select className="outline-none bg-transparent">
                            <option>English</option>
                            <option>UK</option>
                            <option>China</option>
                         </select>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default index;