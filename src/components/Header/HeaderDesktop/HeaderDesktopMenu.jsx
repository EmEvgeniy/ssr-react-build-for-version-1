import HeaderDesktopLogin from "./HeaderDesktopLogin";
import classes from "./HeaderDesktopMenu.module.css";
import HeaderDesktopNav from "./HeaderDesktopNav";

const HeaderDesktopMenu = () => {
	return (
		<div className={classes.HeaderDesktopMenu}>
			<HeaderDesktopNav />
			<HeaderDesktopLogin />
		</div>
	);
};

export default HeaderDesktopMenu;
