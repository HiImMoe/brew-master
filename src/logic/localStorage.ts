export enum LocalStorageKeys {
  GAME_STATE = 'GAME_STATE',

  BALANCE = 'BALANCE',
  BREW_MASTER_COST = 'BREW_MASTER_COST',
  DRIVER_COST = 'DRIVER_COST',

  SELECTED_INGREDIENTS_WATER_ID = 'SELECTED_INGREDIENTS_WATER_ID',
  SELECTED_INGREDIENTS_MALT_ID = 'SELECTED_INGREDIENTS_MALT_ID',
  SELECTED_INGREDIENTS_HOP_ID = 'SELECTED_INGREDIENTS_HOP_ID',

  UNLOCKED_HOPS = 'UNLOCKED_HOPS',
  UNLOCKED_MALT = 'UNLOCKED_MALT',
  UNLOCKED_WATER = 'UNLOCKED_WATER',

  UNLOCKED_DRIVER = 'UNLOCKED_DRIVER',
  UNLOCKED_BREW_MASTER = 'UNLOCKED_BREW_MASTER',

  SELECTED_BREW_MASTER = 'SELECTED_BREW_MASTER',
  SELECTED_DRIVER = 'SELECTED_DRIVER',

  BREW_PROGRESS = 'BREW_PROGRESS',
  BREW_PROGRESS_INCREASE = 'BREW_PROGRESS_INCREASE',

  PRODUCED_AMOUNT = 'PRODUCED_AMOUNT',

  ALCOHOL_ALLOWANCE = 'ALCOHOL_ALLOWANCE',
  DRUNK_PROGRESS = 'DRUNK_PROGRESS',
}

export const initStorage = () => {
  localStorage.setItem(LocalStorageKeys.GAME_STATE, 'START');
  localStorage.setItem(LocalStorageKeys.BALANCE, '1000');
  localStorage.setItem(LocalStorageKeys.BREW_MASTER_COST, '0');
  localStorage.setItem(LocalStorageKeys.DRIVER_COST, '0');
  localStorage.setItem(LocalStorageKeys.SELECTED_INGREDIENTS_HOP_ID, '0');
  localStorage.setItem(LocalStorageKeys.SELECTED_INGREDIENTS_MALT_ID, '0');
  localStorage.setItem(LocalStorageKeys.SELECTED_INGREDIENTS_WATER_ID, '0');
  localStorage.setItem(LocalStorageKeys.BREW_PROGRESS, '0');
  localStorage.setItem(LocalStorageKeys.BREW_PROGRESS_INCREASE, '3');
  localStorage.setItem(LocalStorageKeys.PRODUCED_AMOUNT, '400');
  localStorage.setItem(LocalStorageKeys.ALCOHOL_ALLOWANCE, '1');
  localStorage.setItem(LocalStorageKeys.SELECTED_DRIVER, '0');
  localStorage.setItem(LocalStorageKeys.SELECTED_BREW_MASTER, '0');
  localStorage.setItem(LocalStorageKeys.DRUNK_PROGRESS, '0');
  localStorage.setItem(LocalStorageKeys.UNLOCKED_BREW_MASTER, JSON.stringify([0]));
  localStorage.setItem(LocalStorageKeys.UNLOCKED_DRIVER, JSON.stringify([0]));
  localStorage.setItem(LocalStorageKeys.UNLOCKED_HOPS, JSON.stringify([0]));
  localStorage.setItem(LocalStorageKeys.UNLOCKED_MALT, JSON.stringify([0]));
  localStorage.setItem(LocalStorageKeys.UNLOCKED_WATER, JSON.stringify([0]));
};
