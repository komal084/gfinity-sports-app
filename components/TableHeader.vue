<template>
  <div class="theader py-2 flex justify-between items-center">
    <div class="min-w-min w-1/6 px-4 py-1.5 flex justify-start items-center">
      <span class="mr-1"> Name </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> OVR </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> POS </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> Type </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> PAC </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> SHO </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> PAS </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> DRI </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> DEF </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center border-r border-bg-gray-300">
      <span class="mr-1"> PHY </span>
      <Sort />
    </div>
    <div class="min-w-min w-1/12 px-3 py-1.5 flex justify-center items-center">
      <span class="mr-1"> WR </span>
      <Sort />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TableHeader'
}
</script>
