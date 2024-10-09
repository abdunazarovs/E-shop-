

import "./style.scss";
import { Button } from 'antd';

const index = () => {
    return (
        <section className="order-form">
            <div className="container">
                <div className="order-form__wrapper flex justify-between px-5 rounded-md">
                    <div className="flex flex-col gap-y-2 pt-[50px]">
                        <h2 className="text-[32px] font-semibold tracking-[-0.2px] text-white w-[440px]">An easy way to send requests to all suppliers</h2>
                        <p className="text-[16px] tracking-[-0.2px] text-white w-[390px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>

                    <div className="bg-white w-[490px] rounded-md p-[20px] mt-[40px] h-[346px]">
                        <h3 className="text-[20px] font-semibold mb-[16px]">Send quote to suppliers</h3>
                        <form>
                            <input className="text-[16px] border rounded-md p-[10px] w-full mb-5 outline-none" type="text" placeholder="What item you need?"/>
                            <textarea className="text-[16px] mb-5 border rounded-md p-[10px] w-full outline-none" placeholder="Type more details" cols="30" rows="2"></textarea>
                            <div className="mb-5">
                                <input className="text-[16px] text-[#1C1C1C] border rounded-md p-[10px] outline-none mr-[8px]" type="text" placeholder="Quantity"/>
                                <select className="border rounded-md p-[10px] outline-none text-[16px] text-[#1C1C1C]">
                                    <option value="Pcs">Pcs</option>
                                    <option value="Pcs">Pcs</option>
                                </select>
                            </div>
                            <Button className="bg-blue-500 text-white" size="large">Send inquiry</Button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;