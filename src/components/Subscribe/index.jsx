
import email from "../../assets/icons/email.svg";

import { Button } from 'antd';
const index = () => {
    return (
        <section className="bg-[#EFF2F4] py-[38px]">
            <div className="container">
                <div className="flex items-center flex-col">
                    <h2 className="font-semibold text-[20px] tracking-[-0.2px]">Subscribe on our newsletter</h2>
                    <p className="text-[16px] text-[#606060] mb-5">Get daily news on upcoming offers from many suppliers all over the world</p>
                    <form className="flex gap-x-[10px]">
                        <div className="flex gap-x-[6px] bg-white rounded-sm p-[8px] border">
                            <img src={email} alt="email"/><input className="outline-none" type="text" placeholder="Email"/>
                        </div>
                        <Button className="bg-blue-500 text-white" size="large">Subscribe</Button>
                    </form>
                </div>
            </div>      
        </section>
    );
};

export default index;