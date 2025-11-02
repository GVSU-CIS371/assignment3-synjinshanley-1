import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCream: creamers[1],
    syrups: syrups,
    currentSyrup: syrups[1],
    drinks: [] as BeverageType[]
  }),

  actions: {
    makeBeverage(name: string) {
      const newBeverage = {
        id: this.currentTemp + this.currentBase + this.currentCream + this.currentSyrup,
        name,
        temp: this.currentTemp,
        base: { id: this.currentBase.id, name: this.currentBase.name, color: this.currentBase.color},
        creamer: { id: this.currentCream.id, name: this.currentCream.name, color: this.currentCream.color},
        syrup: { id: this.currentSyrup.id, name: this.currentSyrup.name, color: this.currentSyrup.color}
      }
      this.drinks.push(newBeverage);
    },
    showBeverage() {},
  },
  persist: false,
});
