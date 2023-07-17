// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	components: ["~/components/atoms", "~/components/reviews", "~/components"],
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
			cssnano:
				process.env.NODE_ENV === "production"
					? {
							preset: [
								"default",
								{ discardComments: { removeAll: true } },
							],
					  }
					: false, // disable cssnano when not in production
		},
	},
});
