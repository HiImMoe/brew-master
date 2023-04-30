import { SelectionHop, SelectionI, SelectionMalt, SelectionWater } from '../data/Ingredients';
import { BrewMasterModal } from '../data/brewMaster';
import { BrewMasterI } from '../data/brewMaster';
import { DriverI, DriverModal } from '../data/driver';
import { LocalStorageKeys } from './localStorage';

export interface IngredientConfig {
  hop: SelectionI;
  malt: SelectionI;
  water: SelectionI;
}

export interface WorkerConfig {
  brewMaster: BrewMasterI;
  driver: DriverI;
}

export const getCurrentIngredients = (): IngredientConfig => {
  const idHop = Number(localStorage.getItem(LocalStorageKeys.SELECTED_INGREDIENTS_HOP_ID));
  const idMalt = Number(localStorage.getItem(LocalStorageKeys.SELECTED_INGREDIENTS_MALT_ID));
  const idWater = Number(localStorage.getItem(LocalStorageKeys.SELECTED_INGREDIENTS_WATER_ID));

  const hop = SelectionHop.selection.find(s => s.id === idHop);
  const malt = SelectionMalt.selection.find(s => s.id === idMalt);
  const water = SelectionWater.selection.find(s => s.id === idWater);
  if (hop && malt && water) {
    return { hop, malt, water };
  }
  throw new Error();
};

export const getCurrentWorkers = (): WorkerConfig => {
  const brewMasterId = Number(localStorage.getItem(LocalStorageKeys.SELECTED_BREW_MASTER));
  const driverId = Number(localStorage.getItem(LocalStorageKeys.SELECTED_DRIVER));

  const brewMaster = BrewMasterModal.possibleBrewMasters.find(bm => bm.id === brewMasterId);
  const driver = DriverModal.possibleDrivers.find(d => d.id === driverId);
  if (brewMaster && driver) {
    return {
      brewMaster,
      driver,
    };
  }
  throw new Error();
};
