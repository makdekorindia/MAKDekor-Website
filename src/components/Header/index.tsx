import { LogoFacebook, ChevronDown, LogoInstagram, LogoYoutube } from "react-ionicons";
import bg from "../../assets/images/bg.jpg";
import Logo from "../../assets/images/Logo.png";
import LogoText from "../../assets/images/LogoText.png";

const goToInsta = () => {
	window.location.href='https://www.instagram.com/makdekors_banglore?igsh=MTM1OGN2bnd4YWZkbQ%3D%3D&utm_source=qr'
}
const goToYoutube = () => {
	window.location.href='https://youtube.com/@makdekors_banglore?si=FOYK79CNGB9-IuAD'
}
const goToFacebook = () => {
	window.location.href='https://m.facebook.com/profile.php?id=61579321125467&name=xhp_nt__fb__action__open_user'
}
const Header = () => {
	return (
		<div
			className="w-full h-screen relative bg-cover bg-center flex items-center justify-center"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="flex items-center justify-between absolute top-0 z-50 h-auto w-full px-4 sm:px-8 md:px-[150px]">
				<img src={Logo} alt="MAK Dekors Logo" className="h-16 sm:h-20 w-auto" />
				<img src={LogoText} alt="MAK Dekors Logo Text" className="hidden sm:block h-32 sm:h-40 md:h-48 lg:h-56 xl:h-72 w-auto" />
				<div className="flex items-center gap-5">
					<LogoFacebook
						color="white"
						cssClasses={"cursor-pointer"}
						onClick={goToFacebook}
					/>
					<LogoYoutube
						color="white"
						cssClasses={"cursor-pointer"}
						onClick={goToYoutube}
					/>
					<LogoInstagram
						color="white"
						cssClasses={"cursor-pointer"}
						onClick={goToInsta}
					/>
				</div>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-20"></div>
			<div className="flex flex-col gap-2 items-center">
				<div className="text-white lg:text-[60px] text-[40px] font-semibold z-50 text-center">
					Dekorate Your Home With Experts
				</div>
				<p className="text-gray-300 text-[20px] z-50 text-center lg:max-w-[700px] max-w-[450px]">
					Creating spaces with innovative & contemporary designs
				</p>
			</div>
			<div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center">
				<ChevronDown
					color={"white"}
					width="30px"
					height="30px"
					cssClasses={"animate-bounce"}
				/>
			</div>
		</div>
	);
};

export default Header;
