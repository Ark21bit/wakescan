<template>
   <footer class="grid-container">
      <div class="bg-[#FAFAFA] rounded-[30px] p-7.5 lg:p-16 space-y-16 max-lg:col-span-full">
         <div class="gap-7.5 lg:gap-12 flex lg:items-center max-lg:flex-col">
            <div>
               <IconsLogo class="text-[#51A1FF]" />
            </div>
            <FormKit prefixIcon="search" type="text" placeholder="Поиск" outer-class="max-lg:grow" inner-class="outline-[#4B4B4B]/20 bg-transparent $remove:bg-white $remove:outline-transparent outline outline-1 -outline-offset-1" />
            <div class="flex gap-2.5 lg:ml-auto max-lg:flex-wrap">
               <Button color="gray" class="w-[140px]" decoration="outline">Статьи</Button>
               <Button color="gray" class="w-[140px]" decoration="outline">Курорты</Button>
               <Button color="gray" class="w-[140px]" decoration="outline">Попутчики</Button>
               <Button color="gray" class="lg:ml-[min(0,50px)]" decoration="outline">Личный кабинет</Button>
            </div>
         </div>
         <div class="flex gap-16">
            <div class="rounded-[30px] bg-[#51A1FF] p-7.5 flex items-center gap-8 grow">
               <div class="space-y-2.5">
                  <p class="text-white/50 text-sm">Сегодня 13:05</p>
                  <p class="text-xl font-medium text-white">Закрытие сезона 2023 в Кировске</p>
               </div>
               <Button size="xs">
                  Подробнее
                  <template #suffix>
                     <nuxt-icon name="chevron_right"></nuxt-icon>
                  </template>
               </Button>
            </div>
            <div class="flex gap-25">
               <div class="space-y-5">
                  <p class="text-lg font-medium">Обзоры парков</p>
                  <ul class="text-[#4B4B4B]/70 text-sm/normal space-y-2.5">
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">Популярные</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">В тренде</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">Самые просматриваемые</NuxtLink>
                     </li>
                  </ul>
               </div>
               <div class="space-y-5">
                  <p class="text-lg font-medium">Отзывы</p>
                  <ul class="text-[#4B4B4B]/70 text-sm/normal space-y-2.5">
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">Все отзывы</NuxtLink>
                     </li>
                  </ul>
               </div>
               <div class="space-y-5">
                  <p class="text-lg font-medium">Соревнования</p>
                  <ul class="text-[#4B4B4B]/70 text-sm/normal space-y-2.5">
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">Популярные</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">В тренде</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="hover:text-[#51A1FF]" to="/">Самые просматриваемые</NuxtLink>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="flex gap-5 text-base text-[#4B4B4B]/40">
            <NuxtLink to="/" class="underline">Политика републикации</NuxtLink>
            <NuxtLink to="/" class="underline">Ограничение ответственности</NuxtLink>
            <p class="ml-auto">© 2003 - 2023, ВейкСкан Все права соблюдены.</p>
         </div>
      </div>
   </footer>
</template>

<script setup>

</script>