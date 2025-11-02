<template>
  <div :style="{ backgroundColor: beverageStore.currentSyrup.color}"  class="syrup"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from '../stores/beverageStore';

const beverageStore = useBeverageStore();

</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
