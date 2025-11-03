<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="Base"
              :id="`r${base.id}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`r${creamer.id}`"
              :value="creamer"
              v-model="beverageStore.currentCream"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" v-model="name" placeholder="Beverage Name" />
    <button @click="beverageStore.makeBeverage(name)">🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
    <template v-for="drink in beverageStore.drinks" :key="drink.id">
          <label>
            <input
              type="radio"
              name="drink"
              @click="beverageStore.showBeverage(drink)"
              :id="`r${drink.id}`"
              :value="drink.name"
            />
            {{ drink.name }}
          </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
var name: string;
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
