import { useEffect, useRef, useState } from "react";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import classes from "./CurrencyComp.module.css";
import { useTranslation } from "react-i18next";

const CurrencyComp = () => {
	const [t] = useTranslation("global");
	const currencyT = t("currency", { returnObjects: true }) || [];
	const [active, setActive] = useState(false);
	const [currency, setCurrency] = useState("usd");
	const ref = useRef(null);

	const handleChangeLang = (lang) => {
		setCurrency(lang);
	};
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setActive(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	return (
		<div className={classes.langComp}>
			<div
				onClick={() => setActive(!active)}
				ref={ref}
				className={classes.title}>
				<MdOutlineCurrencyExchange className={classes.globe} />
				<span>{currency.toUpperCase()}</span>
				<IoChevronDown className={classes.arrow} />
			</div>
			<ul
				className={
					active ? `${classes.list} ${classes.active}` : `${classes.list}`
				}>
				{currencyT.map((locale) => {
					return (
						<li
							key={locale}
							onClick={() => {
								setActive(false);
								handleChangeLang(locale);
							}}>
							<span>{locale}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrencyComp;
