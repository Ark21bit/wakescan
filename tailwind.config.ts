import type { Config } from "tailwindcss";
const FormKitVariants = require('@formkit/themes/tailwindcss')
const formKitTailwind = require('@formkit/themes/tailwindcss')

export default <Partial<Config>>{
	content: ["./formkit-theme.js"],
	plugins: [formKitTailwind, FormKitVariants],
	theme: {
		extend: {
			fontFamily: {
				Rubik: ["Rubik", "sans-serif"],
			},
			spacing: {
				11: "2.75rem",
				7.5: "1.875rem",
				15: "3.75rem",
				25: "6.25rem",
			},
			fontSize: {
				xs: ["0.75rem", "normal"],
				sm: ["0.875rem", "normal"],
				base: ["1rem", "normal"],
				lg: ["1.125rem", "normal"],
				xl: ["1.25rem", "normal"],
				"2xl": ["1.5rem", "normal"],
				"3xl": ["1.875rem", "normal"],
				"4xl": ["2.25rem", "normal"],
				"5xl": ["3rem", "normal"],
			},
			zIndex: {
				1: "1",
			},
		},
	},
};
