<template>
   <baseContainer title="Последние отзывы вейк парков" linkTitle="Читать все отзывы" link="/">
      <Swiper class="w-full leading-[0]" :options="options">
         <swiper-slide class="h-auto">
            <review />
         </swiper-slide>
         <swiper-slide class="h-auto">
            <div class="bg-[#51A1FF] rounded-[30px] w-full h-full flex items-center justify-center">
               <Button>
                  Читать отзыв полностью
                  <template #suffix>
                     <nuxt-icon name="chevron_right" />
                  </template>
               </Button>
            </div>
         </swiper-slide>
         <swiper-slide class="h-auto">
            <review />
         </swiper-slide>
      </Swiper>
   </baseContainer>
</template>

<script setup>
const options = ref({
   injectStyles: [".swiper { display:flex }"],
   spaceBetween: "20",
   breakpoints: { 640: { "slidesPerView": 2 } },
   slidesPerView: 1,
   rewind: true,
})
</script>
