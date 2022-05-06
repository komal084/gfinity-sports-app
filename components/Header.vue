<template>
  <div class="header bg-black flex justify-center items-center w-full fixed lg:relative">
    <div class="header__wrapper w-full md:max-w-screen-lg flex justify-between items-center pr-4">
      <div class="header__icon">
        <Menu />
      </div>
      <div class="header__logo">
        <Logo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageHeader'
}
</script>
