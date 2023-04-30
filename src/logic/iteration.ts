import { Subject } from 'rxjs';
import { LocalStorageKeys } from './localStorage';
import { calculateTotalCost } from './money';
import { calculateNextDeliveryProfit } from './beerDelivery';
import { calculateDrunkProgress, calculateEvent } from './drunkProgress';
import { EventI } from '../data/events';
import { calculateBrewProgressIncrease } from './brewProgress';
import { GameState } from '../App';

const subject = new Subject();
export const messageService = {
  sendMessage: (event: EventI | undefined) => subject.next(event),
  clearMessages: () => subject.next({}),
  getMessage: () => subject.asObservable(),
};

const iterate = () => {
  if (localStorage.getItem(LocalStorageKeys.GAME_STATE) === GameState.PLAYING) {
    // calculate brewing progress
    let progress = Number(localStorage.getItem(LocalStorageKeys.BREW_PROGRESS));
    let beerDeliveryProfit = 0;
    if (progress >= 100) {
      beerDeliveryProfit = calculateNextDeliveryProfit();
      progress = 0;
    } else {
      progress += calculateBrewProgressIncrease();
    }
    localStorage.setItem(LocalStorageKeys.BREW_PROGRESS, progress.toString());

    // drunk progress
    const newDrunkProgress = calculateDrunkProgress();
    localStorage.setItem(LocalStorageKeys.DRUNK_PROGRESS, newDrunkProgress.toString());

    // event
    const event = calculateEvent();

    if (event) {
      localStorage.setItem(LocalStorageKeys.DRUNK_PROGRESS, '0');
      localStorage.setItem(LocalStorageKeys.BREW_PROGRESS, '0');
    }

    // calculate new balance
    const oldAmount = localStorage.getItem(LocalStorageKeys.BALANCE);
    const newAmount = Number(oldAmount) - calculateTotalCost() + beerDeliveryProfit;
    localStorage.setItem(LocalStorageKeys.BALANCE, newAmount.toString());
    messageService.sendMessage(event);
  }
};

export const changeMoney = (amount: number) => {
  const oldAmount = localStorage.getItem(LocalStorageKeys.BALANCE);
  const newAmount = Number(oldAmount) + amount;
  localStorage.setItem(LocalStorageKeys.BALANCE, newAmount.toString());
  messageService.sendMessage(undefined);
};

setInterval(iterate, 1500);
