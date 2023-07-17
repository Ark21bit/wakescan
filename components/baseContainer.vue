<template>
   <div class="flex flex-col gap-6 lg:gap-12">
      <div class="flex justify-between gap-2 items-center max-sm:contents">
         <slot name="header">
            <Heading tag="h3" class="flex items-center">
               <slot name="header-icon">
                  <nuxt-icon :name="headerIcon" class="text-2xl mr-4 [&_path]:stroke-[#51A1FF]" filled />
               </slot>
               {{ title }}
            </Heading>
            <Button v-if="linkTitle" color="gray" class="max-sm:w-full max-sm:order-3 !justify-center">
               {{ linkTitle }}
               <template #suffix>
                  <nuxt-icon name="chevron_right" />
               </template>
            </Button>
         </slot>
      </div>
      <slot />     
   </div>
</template>

<script setup>
defineProps({
   title: String,
   linkTitle: String,
   link: String,
   headerIcon: { type: String, default: "waves" },
   headerIconAttr: Object
})
</script>
