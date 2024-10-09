import React from 'react';
import smart from "../../assets/images/smart-watch.png";
import laptop from "../../assets/images/laptop.png";
import photo from "../../assets/images/photo.png";
import earphone from "../../assets/images/earphone.png";
import phone from "../../assets/images/phone.png";


const CardOffer = () => {
  return (
		<section className="offers_card mx-auto ">
			<div className="flex justify-between w-full">
				<div className="wrapper-left min-w-[285px] pt-5 pl-5 h-[235px] border-y border-s">
					<h2 className=" text-[20px] font-semibold">Deals and offers</h2>
					<p className="text-[#8B96A5] text-[16px] font-normal">
						Hygiene equipments
					</p>
					<ul className="flex gap-2 items-center pt-[18px]">
						<li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
							<p>04</p>
							<p>days</p>
						</li>
						<li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
							<p>13</p>
							<p>hours</p>
						</li>
						<li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
							<p>34</p>
							<p>min</p>
						</li>
						<li className="bg-[#606060] text-center text-white rounded w-[45px] h-[50px]">
							<p>56</p>
							<p>sec</p>
						</li>
					</ul>
				</div>

				<div className="wrapper-right flex  h-[240px]">
					<div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
						<img src={smart} className="h-[120px] object-contain object-center"/>
						<p className="mt-[11px] mb-2">Smart watches</p>
						<a href="#" className="text-[16px] px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]">
							-25%
						</a>
					</div>
					<div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
						<img src={laptop} className="h-[120px] object-contain object-center" />
						<p className="mt-[11px] mb-2">Smart watches</p>
						<a href="#" className="text-[16px] px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]">
							-25%
						</a>
					</div>
					<div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
						<img src={photo} className="h-[120px] object-contain object-center" />
						<p className="mt-[11px] mb-2">Smart watches</p>
						<a href="#" className="text-[16px] px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]">
							-25%
						</a>
					</div>
					<div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
						<img src={earphone} className="h-[120px] object-contain object-center" />
						<p className="mt-[11px] mb-2">Smart watches</p>
						<a href="#" className="text-[16px] px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]">
							-25%
						</a>
					</div>
					<div className="card w-[179px] h-[235px] border pt-[9px] px-[20px] flex flex-col items-center justify-center">
						<img src={phone} className="h-[120px] object-contain object-center" />
						<p className="mt-[11px] mb-2">Smart watches</p>
						<a href="#" className="text-[16px] px-3 py-1 rounded-[29px] bg-[#FFE3E3] text-[#EB001B]">
							-25%
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CardOffer;
