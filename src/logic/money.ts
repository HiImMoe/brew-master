import { messageService } from './iteration';
import { LocalStorageKeys } from './localStorage';
import { getCurrentIngredients, getCurrentWorkers } from './utils';

export const calculateWorkerCost = (): number => {
  const workers = getCurrentWorkers();
  const alcoholAllowance = Number(localStorage.getItem(LocalStorageKeys.ALCOHOL_ALLOWANCE));
  return workers.brewMaster.salary * alcoholAllowance + workers.driver.salary * alcoholAllowance;
};

export const calculateIngredientsCost = (): number => {
  const currentIngredients = getCurrentIngredients();
  return currentIngredients.hop.price + currentIngredients.malt.price + currentIngredients.water.price;
};

export const calculateTotalCost = (): number => {
  return calculateIngredientsCost() + calculateWorkerCost();
};

export const buy = (amount: number) => {
  const balance = Number(localStorage.getItem(LocalStorageKeys.BALANCE));
  localStorage.setItem(LocalStorageKeys.BALANCE, (balance - amount).toString());
  messageService.sendMessage(undefined);
};

export const getCurrentBalance = () => {
  const balance = Number(localStorage.getItem(LocalStorageKeys.BALANCE));
  return balance;
};

export const formatNumber = (value: number) => {
  return `${value.toLocaleString('en')}€`;
};
