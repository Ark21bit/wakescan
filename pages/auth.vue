<template>
   <FormKit type="form" form-class="bg-[#51A1FF] rounded-[30px] px-11 py-10 gap-5 flex flex-col max-w-xl w-full mx-auto" :actions="false">
      <Heading tag="h3" class="text-white text-center mb-2.5">Авторизация</Heading>
      <FormKit type="email" placeholder="Email" disabled></FormKit>
      <FormKit type="password" placeholder="Пароль"></FormKit>
      <FormKit type="submit" input-class="mt-2.5">Авторизоваться</FormKit>
      <p class="text-white/80 text-center">Регистрация</p>
   </Formkit>
</template>

<script setup>

</script>
