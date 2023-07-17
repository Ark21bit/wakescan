import { register } from "swiper/element";
import { Mousewheel } from "swiper/modules";
export const useSwiper = (swiperContainer, options) => {
	register();

	onMounted(() => {
		Object.assign(toValue(swiperContainer), {
			modules: [Mousewheel],
			...toValue(options),
		});
		toValue(swiperContainer).initialize();
	});

	return;
};
