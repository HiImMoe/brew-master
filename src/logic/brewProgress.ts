import { LocalStorageKeys } from './localStorage';
import { getCurrentWorkers } from './utils';

export const calculateBrewProgressIncrease = (): number => {
  const progressIncrease = Number(localStorage.getItem(LocalStorageKeys.BREW_PROGRESS_INCREASE));
  const currentWorkers = getCurrentWorkers();
  return progressIncrease + currentWorkers.brewMaster.productivity * 10 + currentWorkers.driver.productivity * 10;
};
