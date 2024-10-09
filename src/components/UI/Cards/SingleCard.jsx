

import "./style.scss";

const Card = ({case:{image, price, title}}) => {
    
    return (
        <div className="border rounded-md bg-white p-[10px] w-[220px]">
           <img src={image} alt="clothe" className="w-[150px] h-[150px] object-contain object-center mx-auto"/>
           <div className="text-[16px] mt-[14px] px-[16px]">
                <p className="font-medium">${price}</p>
                <p className="text-[#8B96A5]">{title.slice(0,25)}...</p>
           </div>
        </div>
    );
};

export default Card;