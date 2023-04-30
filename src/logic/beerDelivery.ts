import { LocalStorageKeys } from './localStorage';
import { getCurrentIngredients } from './utils';
export const BEER_BASE_PRICE = 3;

const calculatePrice = () => {
  const currentIngredients = getCurrentIngredients();
  const quality = (currentIngredients.hop.quality + currentIngredients.malt.quality + currentIngredients.water.quality) / 3;
  return quality * BEER_BASE_PRICE;
};

export const calculateNextDeliveryProfit = () => {
  const producedAmount = Number(localStorage.getItem(LocalStorageKeys.PRODUCED_AMOUNT));
  const earnings = calculatePrice() * producedAmount;
  return earnings;
};
