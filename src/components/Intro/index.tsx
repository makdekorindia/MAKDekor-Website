const Intro = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-start justify-center gap-16">
			<div className="flex flex-col">
				<span className="text-[15px] text-[#425e85]">About Us</span>
				<span className="font-semibold text-[30px] max-w-[350px]">
					Top Solutions By Professional Designers
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<p className="text-gray-600 leading-7 max-w-[500px]">
					At Mak Dekor, we redefine luxury through timeless design, meticulous craftsmanship, and bespoke solutions tailored to your lifestyle. Our mission is simple: to transform your space into a reflection of refined taste, functionality, and effortless elegance.
				</p>
			</div>
		</div>
	);
};

export default Intro;
