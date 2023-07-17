<template>
   <div class="space-y-5">
      <p class="text-xl font-medium">Отзывы</p>
      <div class="flex gap-7.5 ">
         <FormKit type="text" prefixIcon="search" placeholder="Поиск" outer-class="grow max-w-[400px]"
            inner-class="outline-[#4B4B4B]/20 $remove:outline-transparent outline outline-1 -outline-offset-1" />
         <Dropdown class="ml-auto">
            <template #trigger="{ toggle }">
               <Button color="blue" @click="toggle" class="ml-auto px-8">Фильтр</Button>
            </template>
            <FormKit type="form" :actions="false" form-class="w-[470px] flex flex-col gap-5 bg-white rounded-[30px] p-7.5 shadow-[0_4px_22px_0] shadow-[#696969]/25">
               <FormKit type="text" label="Страна" inner-class="outline-[#4B4B4B]/20 $remove:outline-transparent outline outline-1 -outline-offset-1"
                  placeholder="Введите название или выберете из списка"></FormKit>
               <FormKit type="text" label="Город" inner-class="outline-[#4B4B4B]/20 $remove:outline-transparent outline outline-1 -outline-offset-1" placeholder="Введите название или выберете из списка">
               </FormKit>
               <FormKit type="text" label="Вейк парк" inner-class="outline-[#4B4B4B]/20 $remove:outline-transparent outline outline-1 -outline-offset-1"
                  placeholder="Введите название или выберете из списка"></FormKit>
               <FormKit type="button" label="Вейк парк" input-class="bg-[#51A1FF] $remove:bg-white text-white $remove:text-[#4B4B4B]">Применить фильтр</FormKit>
            </FormKit>
         </Dropdown>

         <FormKit v-model="select" type="select" suffixIcon="down" outer-class="w-[200px]" inner-class="outline-[#4B4B4B]/20 $remove:outline-transparent outline outline-1 -outline-offset-1">
            <option>по названию</option>
            <option>по названию2</option>
            <option>по названию2asda asdasd</option>
         </FormKit>
      </div>
      <div class="grid-cols-1 lg:grid-cols-2 grid gap-10">
         <Review v-for="n in 4" />
      </div>
   </div>
</template>

<script setup>
const select = ref('по названию')
</script>
