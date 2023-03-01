import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/translation.json";
import ua from "./ua/translation.json";

export const resources = {
	en: {
		translation: en,
	},
	ua: {
		translation: ua,
	},
};

const i18nextConfig = i18n.use(initReactI18next).init({
	lng: "en",
	debug: true,
	resources,
});

export default i18nextConfig;
