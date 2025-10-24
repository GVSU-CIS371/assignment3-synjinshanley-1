import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
  }),

  actions: {
    makeBeverage() {},
    showBeverage() {},
  },
  persist: true,
});
