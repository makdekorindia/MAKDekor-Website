import Standard from "../../assets/images/Standard.jpg";
import Median from "../../assets/images/Median.jpg";
import Premia from "../../assets/images/Premia.png";
import Bespoke from "../../assets/images/Bespoke.jpg";

const Collections = () => {
	const collectionItems = [
		{
			title: "Standard",
			image: Standard,
			desc: "The most affordable package offered. Targeting those who are looking for a minimum budget home decor solution",
		},
		{
			title: "Median",
			image: Median,
			desc: "A Balance between affordability and quality. Best value for money offer of the lot.",
		},
		{
			title: "Premia",
			image: Premia,
			desc: "Highest package offered, top notch materials and designers are employed.",
		},
		{
			title: "Bespoke",
			image: Bespoke,
			desc: "Custom interiors with Expert Design Theme based designs with Ultra Modern concepts & Premium material 3D modeling with walkthrough videos.",
		},
	];
	return (
		<div className="w-full lg:px-[150px] px-5 pb-8 flex lg:flex-row flex-col items-center justify-between gap-8">
			{collectionItems.map((item, index: number) => (
				<div
					key={index}
					className="w-full h-[600px] bg-center bg-cover relative p-6 cursor-pointer"
					style={{ backgroundImage: `url(${item.image})` }}
				>
					<div className="w-full h-full absolute bg-black opacity-45 z-20 top-0 left-0"></div>
					<div className="flex flex-col">
						<div className="text-white font-semibold text-[20px] z-50">{item.title}</div>
					</div>
					<div className="absolute bottom-10 z-50 flex flex-col gap-6">
						<p className="text-gray-100 leading-6 text-[14px] lg:text-left text-center">
							{item.desc}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Collections;
