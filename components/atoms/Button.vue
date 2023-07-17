<template>
    <component :is="tag" :class="buttonClass">
        <slot name="prefix" />
        <slot />
        <svg v-if="loading" class="inline w-4 h-4 ml-auto animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"></path>
        </svg>
        <slot name="suffix" />
    </component>
</template>

<script setup>


const props = defineProps({
    tag: { type: String, default: "button" },
    category: { type: String, default: "default" },
    size: { type: [String, Boolean], default: "md" },
    decoration: { type: String, default: "default" },
    color: { type: [String, Boolean], default: "black" },
    hover: { type: [String, Boolean, Object], default: true },
    rounded: { type: [String, Boolean], default: true },
    noDefaultAttrsClass: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
})

const slots = useSlots()

const colorClasses = {
    default: {
        default: {
            black: 'text-[#4B4B4B] bg-white',
            blue: 'text-white bg-[#51A1FF]',
            gray: 'text-[#4B4B4B] bg-[#FAFAFA]'
        },
        hover: {
            black: 'hover:text-[#51A1FF]',
            gray: 'hover:text-[#51A1FF]',
            blue: 'hover:text-white',
        }
    },
    outline: {
        default: {
            black: 'text-[#4B4B4B] bg-white outline outline-1 outline-[#4B4B4B] -outline-offset-1',
            gray: 'text-[#4B4B4B] outline outline-1 outline-[#4B4B4B]/20 -outline-offset-1',
        },
        hover: {
            black: 'hover:text-white hover:bg-[#51A1FF] hover:outline-[#51A1FF]',
            gray: 'hover:text-white hover:bg-[#51A1FF] hover:outline-[#51A1FF]',
        }
    }
}

const sizeClasess = {
    default: {
        xs: 'text-sm lg:text-base p-4',
        md: 'text-sm lg:text-base px-5 py-2.5 lg:py-5 [&_.nuxt-icon]:text-xl',
    },
    square: {
        xs: 'text-base p-4',
        md: 'text-base p-5 [&_.nuxt-icon]:text-xl',
    }
};

const roundedClasess = {
    xs: 'rounded-[15px]',
    default: 'rounded-[20px]',
    full: 'rounded-full'
};

const hoverClass = computed(() => {
    if (!props.hover) return ''
    if (typeof props.hover === Object) return colorClasses[props.hover.decoration ?? props.decoration].hover[props.hover.color ?? props.color]
    if (props.hover === true) return colorClasses[props.decoration].hover[props.color]
    return colorClasses[props.decoration].hover[props.hover]
})

const defaultClass = computed(() => {
    if (props.noDefaultAttrsClass) return ''

    const classes = 'flex items-center transition-all duration-500 ease-linear gap-2.5'

    if ((slots.prefix || slots.suffix)) return `${classes} justify-between`
    return `${classes} justify-center`
})

const roundedClass = computed(() => {
    if (!props.rounded) return ''
    if (props.rounded === true) return roundedClasess['default']
    if (props.rounded == 'auto') return roundedClasess[props.size]
    return roundedClasess[props.rounded]
})

const buttonClass = computed(() => {
    return [
        defaultClass.value,
        roundedClass.value,
        props.color && colorClasses[props.decoration].default[props.color],
        props.size && sizeClasess[props.category][props.size],
        hoverClass.value
    ]
});

</script>
