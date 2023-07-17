<template>
    <component :is="tag" :class="badgeClass">
        <slot name="prefix" />
        <slot />
        <slot name="suffix" />
    </component>
</template>

<script setup>


const props = defineProps({
    tag: { type: String, default: "div" },
    size: { type: [String, Boolean], default: "sm" },
    decoration: { type: String, default: "default" },
    color: { type: [String, Boolean], default: "yellow" },
    rounded: { type: [String, Boolean], default: true },
    noDefaultAttrsClass: { type: Boolean, default: false },
})

const slots = useSlots()

const colorClasses = {
    default: {
        yellow: 'bg-[#FFAF51] text-white',
        blue: 'bg-[#51A1FF] text-white'
    },
    outline: {
    }
}

const sizeClasess = {
    sm: 'px-4 py-2.5 text-sm uppercase font-medium',
};

const roundedClasess = {
    xs: 'rounded-[15px]',
    default: 'rounded-[10px]',
    full: 'rounded-full'
};
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

const badgeClass = computed(() => {
    return [
        defaultClass.value,
        roundedClass.value,
        props.color && colorClasses[props.decoration][props.color],
        props.size && sizeClasess[props.size],
    ]
});

</script>
