import { BrushOutline, LeafOutline, RibbonOutline } from "react-ionicons";

const Services = () => {
	const services = [
		{
			title: "Modern Design",
			icon: BrushOutline,
			desc: "We shall transform the spaces with flexibility to customers in interior design, furnishings, wide range of optional services on the basis of different price structure.",
		},
		{
			title: "Environment Friendly",
			icon: LeafOutline,
			desc: "Eco-friendly interiors blend nature and innovation, proving that sustainability doesn't mean sacrificing comfort or elegance. Making green choices today helps shape a better tomorrow.",
		},
		{
			title: "Top Quality",
			icon: RibbonOutline,
			desc: "It's our standard to maintain top quality from concept to completion, bringing precision, passion, and innovation to every project. Creating spaces that are as functional as they are breathtaking.",
		},
	];
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-center justify-between gap-8">
			{services.map((service) => (
				<div
					key={service.title}
					className="flex flex-col items-center gap-3"
				>
					<service.icon
						color="#425e85"
						width={"50px"}
						height={"50px"}
					/>
					<span className="font-semibold text-[20px]">{service.title}</span>
					<p className="text-gray-600 leading-7 text-center max-w-[350px]">{service.desc}</p>
				</div>
			))}
		</div>
	);
};

export default Services;
