import { Outlet } from "react-router-dom";
import useDeviceDetect from "../hooks/useDeviceDetect";
import HeaderMobile from "../components/Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../components/Header/HeaderDesktop/HeaderDesktop";

const MainLayout = () => {
	const { isMobile } = useDeviceDetect();
	return (
		<div>
			{isMobile ? <HeaderMobile /> : <HeaderDesktop />}
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
