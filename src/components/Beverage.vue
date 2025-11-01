<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="currentCream !== 'transparent'"/>
      </template>
      <template v-slot:mid>
        <Syrup v-if="currentSyrup !== '#c6c6c6'"/>
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { currentSyrup } from "../stores/beverage";
import { currentCream } from "../stores/beverage";

type Props = {
  isIced: boolean;
};
defineProps<Props>();
</script>
