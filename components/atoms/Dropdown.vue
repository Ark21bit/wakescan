<template>
   <div class="relative" v-on-click-outside="() => isShow = false">
      <slot name="trigger" :toggle="toggle">
         <Button @click="toggle" color="blue">{{ text }}</Button>
      </slot>
      <transition name="fade">
         <div v-show="isShow" class="absolute top-full translate-y-5 left-0 z-10" :class="contentClass">
            <slot></slot>
         </div>
      </transition>
   </div>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
defineProps({
   text: String,
   contentClass: String
})
const isShow = ref(false)

const toggle = () => isShow.value = !isShow.value
</script>
