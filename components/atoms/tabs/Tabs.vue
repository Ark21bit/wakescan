<template>
  <div class="space-y-[30px]">
    <div class="flex max-lg:flex-col">
      <ul class='tabs-header text-sm font-medium text-fblack px-2.5 py-2 flex max-sm:flex-col lg:gap-2 items-center justify-between rounded-[5px] shadow-[0_4px_23px_0_rgba(0,0,0,.07)]'>
        <li v-for="tab in tabs" :key='tab.index'>
          <button class="p-5 text-base outline outline-1 transition-all duration-300-300 ease-linear -outline-offset-1 rounded-[20px] hover:text-white hover:outline-[#51A1FF] hover:bg-[#51A1FF]" :class="tab.props.name == activeTab ? 'text-white outline-[#51A1FF] bg-[#51A1FF]' : 'text-[#4B4B4B] outline-[#4B4B4B]/20'"
            @click='updateActiveTab(tab.props.name)'>
            {{ tab.props.title }}
          </button>
        </li>
      </ul>
      <slot name="buttonHeader" />
    </div>
    <slot />
  </div>
</template>
  
<script setup>

const slots = useSlots()

let tabs = ref([...slots.default().filter(child => child.type.__name === "Tab")])

const activeTab = ref(tabs.value[0]?.props.name);

function updateActiveTab(name) {
  activeTab.value = name
}

provide('activeTab', activeTab)



</script>


 