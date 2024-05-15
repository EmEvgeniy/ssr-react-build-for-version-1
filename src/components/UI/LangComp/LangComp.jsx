import { useEffect, useRef, useState } from "react";

import { CiGlobe } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import classes from "./LangComp.module.css";
import { getLanguage, setLanguage } from "../../../translation/language";
import { useTranslation } from "react-i18next";

const LangComp = () => {
	const [t, i18n] = useTranslation("global");
	const lang = t("lang", { returnObjects: true }) || [];
	const [active, setActive] = useState(false);
	const ref = useRef(null);

	const handleChangeLang = (lang) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
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
				<CiGlobe className={classes.globe} />
				<span>{getLanguage().toUpperCase()}</span>
				<IoChevronDown className={classes.arrow} />
			</div>
			<ul
				className={
					active ? `${classes.list} ${classes.active}` : `${classes.list}`
				}>
				{Array.isArray(lang) &&
					lang.map((locale) => (
						<li
							key={locale}
							onClick={() => {
								setActive(false);
								handleChangeLang(locale);
							}}>
							<span>{locale}</span>
						</li>
					))}
			</ul>
		</div>
	);
};

export default LangComp;
