<template>
   <new-overview class="mt-10 lg:mt-25" />
   <recent-reviews class="mt-10 lg:mt-25" />
   <recent-reviews class="mt-10 lg:mt-25" :simulate-touch="false"/>
   <base-container class="mt-10 lg:mt-25" title="Ближайшие соревнования" linkTitle="Все соревнования" link="/">
      <template #header-icon>
         <nuxt-icon name="cup" class="text-2xl mr-4 text-[#FFAF51]" />
      </template>
      <table-products class="bg-[#FFF7EE]"/>
   </base-container>
   <base-container class="mt-10 lg:mt-25" title="Ближайшие кемпы" linkTitle="Все кемпы" link="/">
      <template #header-icon>
         <nuxt-icon name="reilly" class="text-2xl mr-4 text-[#51A1FF]" />
      </template>
      <table-products class="bg-[#F6FAFF]"/>
   </base-container>
   <popular-queries class="mt-10 lg:mt-25" />
</template>

<script setup>
definePageMeta({ layout: 'index' })
</script>
