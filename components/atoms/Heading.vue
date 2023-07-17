<template>
    <component :is="tag" :class="headingClass" class="font-bold">
        <slot />
    </component>
</template>

<script setup>
const { tag } = defineProps({
    tag: { type: String, default: "h2" },
});

const sizeClass = {
    h1: 'text-5xl md:text-[4rem]',
    h2: 'text-4xl md:text-5xl',
    h3: 'text-lg lg:text-[1.625rem] font-medium',
    h4: 'text-xl md:text-2xl',
    h5: 'text-base md:text-lg',
}

const headingClass = ref([
    sizeClass[tag],
])
</script>

