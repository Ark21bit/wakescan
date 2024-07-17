// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	devtools: { enabled: true },
	components: [
		"~/components/atoms",
		"~/components/atoms/tabs",
		"~/components/reviews",
		"~/components",
	],
	modules: [
		"nuxt-icons",
		"@formkit/nuxt",
		"@vueuse/nuxt",
		"@nuxtjs/google-fonts",
	],
	googleFonts: {
		download: true,
		families: { Rubik: true },
		preload: true,
		useStylesheet: true,
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) =>
				["swiper-container", "swiper-slide"].includes(tag),
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
