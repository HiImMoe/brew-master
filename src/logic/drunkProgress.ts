import { EventI, events } from '../data/events';
import { LocalStorageKeys } from './localStorage';

export const calculateDrunkProgress = () => {
  const drunkProgress = Number(localStorage.getItem(LocalStorageKeys.DRUNK_PROGRESS));
  const alcoholAllowance = Number(localStorage.getItem(LocalStorageKeys.ALCOHOL_ALLOWANCE));
  if (drunkProgress > 100) {
    return 100;
  } else if (drunkProgress < 0) {
    return 0;
  }
  const newDrunkProgress = drunkProgress + (10 / alcoholAllowance - 15);
  return newDrunkProgress;
};

export const calculateEvent = (): EventI | undefined => {
  const drunkProgress = Number(localStorage.getItem(LocalStorageKeys.DRUNK_PROGRESS));

  const probabilityEvent = drunkProgress - 50;
  if (probabilityEvent > 0) {
    const probability = Math.random() * probabilityEvent * 2;
    if (probability > 50) {
      const event = events[Math.floor(Math.random() * events.length)];
      return event;
    }
  }
  return undefined;
};
