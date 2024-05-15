import { useTranslation } from "react-i18next";
import classes from "./HeaderDesktopLogin.module.css";
import { FaInfoCircle } from "react-icons/fa";
import { Button } from "@mui/material";

const HeaderDesktopLogin = () => {
	const [t] = useTranslation("global");
	const login = t("login", { returnObjects: true }) || [];
	return (
		<div className={classes.HeaderDesktopLogin}>
			<div className={classes.info}>
				<FaInfoCircle className={classes.icon} />
				<p>{login.info}</p>
			</div>
			<div>
				<Button>as</Button>
				<Button>as2</Button>
			</div>
		</div>
	);
};

export default HeaderDesktopLogin;
