// src/translation/language.ts

const LANGUAGE_KEY = "language";

export const getLanguage = () => {
	if (typeof window !== "undefined") {
		// Check if running in the browser before accessing localStorage
		const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
		return storedLanguage || "en"; // Default language if not found
	} else {
		// For server-side rendering, provide a default language
		return "en";
	}
};

export const setLanguage = (language) => {
	if (typeof window !== "undefined") {
		// Only access localStorage in the browser
		localStorage.setItem(LANGUAGE_KEY, language);
	}
};
