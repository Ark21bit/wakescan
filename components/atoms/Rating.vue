<template>
   <div class="raiting-wrapper grid w-fit">
      <div class="flex col-start-1 row-start-1 gap-2.5">
         <nuxt-icon name="reilly" class="text-[#4B4B4B]/30" v-for="star in scale" :style="{ fontSize: `${size}px` }"></nuxt-icon>
      </div>
      <div class="flex text-primary grid-cols-1 gap-2.5 col-start-1 row-start-1 overflow-hidden" :style="{ width: `${100 / scale * rating}%` }">
         <nuxt-icon name="reilly" class="text-[#51A1FF]" v-for="star in scale" :style="{ fontSize: `${size}px` }"></nuxt-icon>
      </div>
   </div>
</template>

<script setup>
defineProps({
   rating: { type: Number, default: 3 },
   scale: { type: Number, default: 5 },
   size: { type: Number, default: 24 }
})
</script>
