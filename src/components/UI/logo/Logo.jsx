import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import classes from "./Logo.module.css";

const Logo = () => {
	return (
		<Link to='/' className={classes.Logo}>
			<img src={logo} alt='' />
		</Link>
	);
};

export default Logo;
