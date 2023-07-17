<template>
   <header class="grid-container">
      <div class="flex items-center gap-12 py-7.5 lg:py-12">
         <div>
            <NuxtLink to="/">
               <IconsLogo class="w-[110px] text-[#51A1FF] logo" />
            </NuxtLink>
         </div>
         <nav class="flex justify-between gap-5">
            <NuxtLink to="/" class="text-base p-5 rounded-[20px] hover:bg-white hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Вейк парки</NuxtLink>
            <NuxtLink to="/" class="text-base p-5 rounded-[20px] hover:bg-white hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Соревнования</NuxtLink>
            <NuxtLink to="/" class="text-base p-5 rounded-[20px] hover:bg-white hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Кемпы</NuxtLink>
            <NuxtLink to="/" class="text-base p-5 rounded-[20px] hover:bg-white hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Статьи</NuxtLink>
            <NuxtLink to="/" class="text-base p-5 rounded-[20px] hover:bg-white hover:text-[#51A1FF] transition-colors duration-500 ease-linear">Обзоры</NuxtLink>
         </nav>
         <FormKit prefixIcon="search" type="text" placeholder="Поиск"
            inner-class="text-white $remove:text-[#4B4B4B] bg-transparent $remove:bg-white outline-white/20 $remove:outline-transparent outline outline-1 -outline-offset-1"
            input-class="placeholder-white/50 $remove:placeholder-[#4B4B4B]/50">
         </FormKit>
      </div>
      <slot></slot>
   </header>
</template>

<script setup>
const router = useRouter()
defineProps({

})
</script>
