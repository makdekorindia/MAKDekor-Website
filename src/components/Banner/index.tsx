import banner from "../../assets/images/banner.jpg";

const Banner = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 md:py-10 py-8 h-[700px]">
			<div
				className="w-full h-full bg-center bg-cover fex items-center rounded-lg"
				style={{ backgroundImage: `url(${banner})` }}
			>
				<div className="w-full bg-[#000000c2] lg:w-1/2 lg:px-0 px-10 h-full flex items-center justify-center rounded-tl-lg rounded-bl-lg">
					<div className="flex flex-col items-start">
						<span className="text-white text-[15px] lg:w-fit lg:text-left w-full text-center">
							Our Mission
						</span>
						<div className="font-semibold text-[45px] text-center text-white">
							We Care About Top Quality
						</div>
						<p className="mt-3 text-gray-200 max-w-[600px] lg:text-left text-center leading-7">
							Why We are Known for Top Quality:<br></br>
							Tailored Solutions: We don't believe in one-size-fits-all. Every design is customized to reflect our clients' lifestyle, values, and vision.<br></br>
							Premium Materials & Craftsmanship: From luxurious finishes to sustainable choices, we work with vetted suppliers and skilled artisans to ensure durability and elegance.<br></br>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
