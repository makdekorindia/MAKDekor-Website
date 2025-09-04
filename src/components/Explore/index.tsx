import GridImage from "../GridImage";
import Standard_1 from "../../assets/images/Standard-1.jpg";
import Standard_2 from "../../assets/images/Standard-2.jpg";
import Standard_3 from "../../assets/images/Standard-3.jpg";
import Standard_4 from "../../assets/images/Standard-4.jpg";
import Standard_5 from "../../assets/images/Standard-5.jpg";
import Standard_6 from "../../assets/images/Standard-6.jpg";
import Median_1 from "../../assets/images/Median-1.jpg";
import Median_2 from "../../assets/images/Median-2.jpg";
import Median_3 from "../../assets/images/Median-3.jpg";
import Median_4 from "../../assets/images/Median-4.jpg";
import Median_5 from "../../assets/images/Median-5.jpg";
import Premia_1 from "../../assets/images/Premia-1.jpg";
import Premia_2 from "../../assets/images/Premia-2.jpg";
import Premia_3 from "../../assets/images/Premia-3.jpg";
import Premia_4 from "../../assets/images/Premia-4.jpg";
import Premia_5 from "../../assets/images/Premia-5.jpg";
import Bespoke_1 from "../../assets/images/Bespoke-1.jpg";
import Bespoke_2 from "../../assets/images/Bespoke-2.jpg";
import Bespoke_3 from "../../assets/images/Bespoke-3.jpg";
import Bespoke_4 from "../../assets/images/Bespoke-4.jpg";
import Bespoke_5 from "../../assets/images/Bespoke-5.jpg";
import Bespoke_6 from "../../assets/images/Bespoke-6.jpg";
const Explore = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-10 py-8 flex flex-col items-center justify-center gap-5">
			<div className="flex flex-col items-center">
				<span className="text-[15px] text-[#425e85]">Explore</span>
				<span className="font-semibold text-[50px] text-center">
					Our Latest Interior Designs
				</span>
				<p className="mt-3 text-gray-500 text-center max-w-[500px]">
					Our latest works of Bespoke, Premia, Median and Standard categories done for different customers.
				</p>
			</div>
			<div style={{marginTop: '30px'}}>
				<span className="font-semibold text-[30px]">
					Standard
				</span>
			</div>
			<div className="grid grid-cols-5 grid-rows-7 gap-4 w-full h-[800px]">
				<GridImage
					image={Standard_1}
					layout="col-span-2 row-span-3"
				/>
				<GridImage
					image={Standard_2}
					layout="col-span-2 row-span-3 col-start-3"
				/>
				<GridImage
					image={Standard_3}
					layout="row-span-3 col-start-5"
				/>
				<GridImage
					image={Standard_4}
					layout="row-span-4 row-start-4"
				/>
				<GridImage
					image={Standard_5}
					layout="col-span-2 row-span-4 row-start-4"
				/>
				<GridImage
					image={Standard_6}
					layout="col-span-2 row-span-4 col-start-4 row-start-4"
				/>
			</div>
			<div style={{marginTop: '40px'}}>
				<span className="font-semibold text-[30px]">
					Median
				</span>
			</div>
			<div className="grid grid-cols-5 grid-rows-6 gap-4 w-full h-[800px]">
				<GridImage
					image={Median_1}
					layout="col-span-2 row-span-3"
				/>
				<GridImage
					image={Median_2}
					layout="col-span-2 row-span-3 col-start-3"
				/>
				<GridImage
					image={Median_3}
					layout="row-span-3 col-start-5"
				/>
				<GridImage
					image={Median_4}
					layout="col-span-3 row-span-5 row-start-4"
				/>
				<GridImage
					image={Median_5}
					layout="col-span-3 row-span-5 row-start-4"
				/>
			</div>
			<div  style={{marginTop: '40px'}}>
				<span className="font-semibold text-[30px]">
					Premia
				</span>
			</div>
			<div className="grid grid-cols-5 grid-rows-7 gap-4 w-full h-[800px]">
				<GridImage
					image={Premia_1}
					layout="col-span-2 row-span-3"
				/>
				<GridImage
					image={Premia_2}
					layout="col-span-2 row-span-3 col-start-3"
				/>
				<GridImage
					image={Premia_3}
					layout="row-span-3 col-start-5"
				/>
				<GridImage
					image={Premia_4}
					layout="col-span-3 row-span-5 row-start-4"
				/>
				<GridImage
					image={Premia_5}
					layout="col-span-3 row-span-5 row-start-4"
				/>
			</div>
			<div style={{marginTop: '40px'}}>
				<span className="font-semibold text-[30px]">
					Bespoke
				</span>
			</div>
			<div className="grid grid-cols-5 grid-rows-6 gap-4 w-full h-[800px]">
				<GridImage
					image={Bespoke_1}
					layout="col-span-2 row-span-3"
				/>
				<GridImage
					image={Bespoke_2}
					layout="col-span-2 row-span-3 col-start-3"
				/>
				<GridImage
					image={Bespoke_3}
					layout="row-span-3 col-start-5"
				/>
				<GridImage
					image={Bespoke_4}
					layout="row-span-3 row-start-4"
				/>
				<GridImage
					image={Bespoke_5}
					layout="col-span-2 row-span-3 row-start-4"
				/>
				<GridImage
					image={Bespoke_6}
					layout="col-span-2 row-span-3 col-start-4 row-start-4"
				/>
			</div>
		</div>
	);
};

export default Explore;
