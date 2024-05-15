import { Outlet } from "react-router-dom";
import useDeviceDetect from "../hooks/useDeviceDetect";
import HeaderMobile from "../components/Header/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../components/Header/HeaderDesktop/HeaderDesktop";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
	const { isMobile } = useDeviceDetect();
	return (
		<div className={classes.MainLayout}>
			{isMobile ? <HeaderMobile /> : <HeaderDesktop />}
			<main className='container'>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
