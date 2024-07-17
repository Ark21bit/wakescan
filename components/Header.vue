<template>
   <header class="grid-container">
      <div class="flex max-lg:flex-wrap items-center gap-y-6 lg:gap-x-12 py-7.5 lg:py-12" :class="{ 'bg-white fixed inset-0 px-[var(--widthContentMargin)] z-40': isMobileMenuShow }">
         <div>
            <NuxtLink to="/">
               <IconsLogo class="w-[110px] text-[#51A1FF] logo" :class="{ '': isMobileMenuShow }" />
            </NuxtLink>
         </div>
         <button @click="isMobileMenuShow = !isMobileMenuShow" class="flex w-7 h-3.5 flex-col justify-between ml-auto lg:hidden">
            <span class="h-0.5 w-full rounded-full" :class="isMobileMenuShow ? 'bg-[#4B4B4B]' : 'bg-white'"></span>
            <span class="h-0.5 w-full rounded-full" :class="isMobileMenuShow ? 'bg-[#4B4B4B]' : 'bg-white'"></span>
            <span class="h-0.5 w-full rounded-full" :class="isMobileMenuShow ? 'bg-[#4B4B4B]' : 'bg-white'"></span>
         </button>
         <nav class="flex justify-between gap-5 max-lg:w-full max-lg:order-4 max-lg:flex-col" :class="{ 'max-lg:hidden': !isMobileMenuShow }">
            <NuxtLink to="/" class="max-lg:outline-1 max-lg:text-center max-lg:text-[#4B4B4B] max-lg:outline max-lg:outline-[#4B4B4B]/20 max-lg:-outline-offset-1 text-base p-5 rounded-[20px] lg:hover:bg-white lg:hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Вейк парки</NuxtLink>
            <NuxtLink to="/" class="max-lg:outline-1 max-lg:text-center max-lg:text-[#4B4B4B] max-lg:outline max-lg:outline-[#4B4B4B]/20 max-lg:-outline-offset-1 text-base p-5 rounded-[20px] lg:hover:bg-white lg:hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Соревнования</NuxtLink>
            <NuxtLink to="/" class="max-lg:outline-1 max-lg:text-center max-lg:text-[#4B4B4B] max-lg:outline max-lg:outline-[#4B4B4B]/20 max-lg:-outline-offset-1 text-base p-5 rounded-[20px] lg:hover:bg-white lg:hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Кемпы</NuxtLink>
            <NuxtLink to="/" class="max-lg:outline-1 max-lg:text-center max-lg:text-[#4B4B4B] max-lg:outline max-lg:outline-[#4B4B4B]/20 max-lg:-outline-offset-1 text-base p-5 rounded-[20px] lg:hover:bg-white lg:hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Статьи</NuxtLink>
            <NuxtLink to="/" class="max-lg:outline-1 max-lg:text-center max-lg:text-[#4B4B4B] max-lg:outline max-lg:outline-[#4B4B4B]/20 max-lg:-outline-offset-1 text-base p-5 rounded-[20px] lg:hover:bg-white lg:hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Обзоры</NuxtLink>
         </nav>
         <FormKit outer-class="max-lg:w-full" prefixIcon="search" type="text" placeholder="Поиск"
            inner-class="text-white $remove:text-[#4B4B4B] bg-transparent $remove:bg-white outline-white/20 $remove:outline-transparent outline outline-1 -outline-offset-1"
            input-class="placeholder-white/50 $remove:placeholder-[#4B4B4B]/50">
         </FormKit>
      </div>
      <slot></slot>
   </header>
</template>

<script setup>
const isMobileMenuShow = ref(false)
defineProps({

})
</script>
