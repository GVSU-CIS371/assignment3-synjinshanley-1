import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCream: creamers[1],
    syrups: syrups,
    currentSyrup: syrups[1]
  }),

  actions: {
    makeBeverage() {},
    showBeverage() {},
  },
  persist: true,
});
