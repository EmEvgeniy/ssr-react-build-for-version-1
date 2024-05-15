import { useTranslation } from "react-i18next";
import classes from "./HeaderDesktopNav.module.css";
import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaCompass, FaDirections } from "react-icons/fa";

const icons = {
	1: <FaHome className={classes.icon} />,
	2: <FaHeart className={classes.icon} />,
	3: <FaCompass className={classes.icon} />,
	4: <FaDirections className={classes.icon} />,
};

const HeaderDesktopNav = () => {
	const [t] = useTranslation("global");
	const nav = t("navDesktop", { returnObjects: true }) || [];

	return (
		<nav className={classes.HeaderDesktopNav}>
			{nav.map((el) => (
				<Link key={el.id} to={el.link}>
					{icons[el.id]}
					<span>{el.title}</span>
				</Link>
			))}
		</nav>
	);
};

export default HeaderDesktopNav;
