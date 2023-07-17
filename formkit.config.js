// formkit.config.js
import { generateClasses } from "@formkit/themes";
import { ru } from "@formkit/i18n";
import { createAutoAnimatePlugin } from "@formkit/addons";
import myTailwindTheme from "./formkit-theme.js";

export default {
	locales: { ru },
	locale: "ru",
	config: {
		classes: generateClasses(myTailwindTheme),
	},
	plugins: [createAutoAnimatePlugin()],
};
