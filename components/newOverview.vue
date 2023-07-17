<template>
   <baseContainer title="Новые обзоры вейк парков">
      <div class="flex-col flex gap-7.5">
         <div class="flex justify-between items-center p-5 lg:py-14 lg:px-16 overflow-hidden relative bg-[#51A1FF]/40 rounded-[30px] bg-[url(/img/bgWaves.svg)]">
            <div class="max-w-lg space-y-3 lg:space-y-4">
               <h2 class="text-2xl lg:text-[2rem] font-medium text-white uppercase">AWESOME PARK</h2>
               <p class="text-white/80 text-xs lg:text-base">Задача организации, в особенности же убеждённость некоторых оппонентов однозначно фиксирует необходимость укрепления моральных ценностей...</p>
               <div class="capitalize text-xs lg:text-sm text-white/80 flex">
                  <p class="mr-5">author name</p>
                  <p>Сегодня 13:05</p>
               </div>
            </div>
            <Button class="max-sm:p-2 mt-auto max-sm:rounded-full max-sm:bg-white/20 max-sm:outline-1 max-sm:text-white max-sm:outline max-sm:outline-white/20 max-sm:-outline-offset-1">
               <span class="max-sm:hidden">Читать обзор</span>
               <template #suffix>
                  <nuxt-icon name="chevron_right" />
               </template>
            </Button>
            <div class="inset-0 absolute -z-1">
               <img src="/img/bgReview.png" alt="" class="w-full h-full object-cover">
            </div>
         </div>
         <div class="flex justify-between items-center p-5 lg:py-14 lg:px-16 overflow-hidden relative bg-[#51A1FF] rounded-[30px] bg-[url(/img/bgWaves.svg)]">
            <div class="max-w-lg space-y-3 lg:space-y-4">
               <h2 class="text-2xl lg:text-[2rem] font-medium text-white uppercase">юнити</h2>
               <p class="text-white/80 text-xs lg:text-base">Задача организации, в особенности же убеждённость некоторых оппонентов однозначно фиксирует необходимость укрепления моральных ценностей...</p>
               <div class="capitalize text-xs lg:text-sm text-white/80 flex">
                  <p class="mr-5">author name</p>
                  <p>Сегодня 13:05</p>
               </div>
            </div>
            <Button class="max-sm:p-2 mt-auto max-sm:rounded-full max-sm:bg-white/20 max-sm:outline-1 max-sm:text-white max-sm:outline max-sm:outline-white/20 max-sm:-outline-offset-1">
               <span class="max-sm:hidden">Читать обзор</span>
               <template #suffix>
                  <nuxt-icon name="chevron_right" />
               </template>
            </Button>
         </div>
      </div>
   </baseContainer>
</template>

<script setup>

</script>

