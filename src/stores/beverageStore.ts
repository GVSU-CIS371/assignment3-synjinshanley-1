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
        id: this.currentTemp + this.currentBase.id + this.currentCream.id + this.currentSyrup.id,
        name,
        temp: this.currentTemp,
        base: { id: this.currentBase.id, name: this.currentBase.name, color: this.currentBase.color},
        creamer: { id: this.currentCream.id, name: this.currentCream.name, color: this.currentCream.color},
        syrup: { id: this.currentSyrup.id, name: this.currentSyrup.name, color: this.currentSyrup.color}
      }
      this.drinks.push(newBeverage);
    },
    showBeverage(drink: BeverageType) {
      const find = this.drinks.find(bev => bev.id === drink.id)
      if (find){
        if (find.id === drink.id) {
        this.currentBase = drink.base
        this.currentTemp = drink.temp
        this.currentCream = drink.creamer
        this.currentSyrup = drink.syrup
        console.log(this.currentTemp)
        } else {
        console.log('error')
        }
      }
    },
  },
  persist: true,
});
