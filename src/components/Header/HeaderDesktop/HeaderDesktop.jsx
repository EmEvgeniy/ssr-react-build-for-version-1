import Logo from "../../UI/logo/Logo";
import classes from "./HeaderDesktop.module.css";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderDesktopTopComp from "./HeaderDesktopTopComp";

const HeaderDesktop = () => {
	return (
		<header className={classes.header}>
			<Logo />
			<HeaderDesktopTopComp />
			<HeaderDesktopMenu />
		</header>
	);
};

export default HeaderDesktop;
