import { I18nextProvider } from "react-i18next";
import global_en from "../translation/en/global.json";
import { getLanguage } from "../translation/language";
import global_ru from "../translation/ru/global.json";
import i18next from "i18next";

i18next.init({
	interpolation: { escapeValue: false },
	lng: getLanguage(),
	resources: {
		en: {
			global: global_en,
		},
		ru: {
			global: global_ru,
		},
	},
});

export const I18nProvider = ({ children }) => {
	return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
