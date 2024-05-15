import classes from "./HeaderDesktopTopComp.module.css";
import LangComp from "../../UI/LangComp/LangComp";
import CurrencyComp from "../../UI/currencyComp/CurrencyComp";

const HeaderDesktopTopComp = () => {
	return (
		<div className={classes.HeaderDesktopTopComp}>
			<LangComp />
			<CurrencyComp />
		</div>
	);
};

export default HeaderDesktopTopComp;
