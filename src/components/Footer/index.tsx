const Footer = () => {
	return (
		<div className="w-full bg-[#F7F7F7] pt-[120px] lg:px-[150px] px-8 pb-[56px] mt-[120px]">
			<div className="w-full flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-10">
				<div className="flex flex-col gap-8">
					<span className="font-semibold text-[#333] text-[28px]">Contact Us</span>
					<p className="font-medium text-[#333] text-[15px] max-w-[350px] leading-7">
						Email id:- makdekorindia@gmail.com<br></br>Mobile:- +91 9008036036 / +91 7207877099<br></br>Address:- #221 4th cross, Celebrity Paradise Layout, Electronic City Phase-1, Bangalore 560100
					</p>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="font-medium text-[#425e85] text-[17px] mb-5">Services</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Interior Design
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						House Design
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Design Consultancy
					</a>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="font-medium text-[#425e85] text-[17px] mb-5">Collections</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Standard
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Median
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Premia
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Bespoke
					</a>
				</div>
				<div className="flex flex-col md:mb-0 mb-5">
					<span className="font-medium text-[#425e85] text-[17px] mb-5">Follow us</span>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Youtube
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px] mb-4"
					>
						Twitter
					</a>
					<a
						href="#"
						className="text-[#333] font-medium text-[15px]"
					>
						Instagram
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
