export interface SelectionI {
  id: number;
  title: string;
  description: string;
  price: number;
  quality: number;
  unlockPrice: number;
}

export interface SelectionModalI {
  title: string;
  selection: SelectionI[];
}

export const SelectionWater: SelectionModalI = {
  title: 'Water',
  selection: [
    {
      id: 0,
      title: 'Stagnant Swamp Water',
      price: 1,
      quality: 2,
      unlockPrice: 0,
      description: 'Dirty, stagnant water that will give the beer an unpleasant, musty taste',
    },
    {
      id: 1,
      title: 'Chlorine Creek Water',
      price: 5,
      quality: 5,
      unlockPrice: 1000,
      description: 'Water treated with too much chlorine, giving the beer a chemical taste and aroma',
    },
    {
      id: 2,
      title: 'Plain Petes Well Water',
      price: 15,
      quality: 8,
      unlockPrice: 4000,
      description: 'Average tasting water that lacks any special character',
    },
    {
      id: 3,
      title: 'Mountain Stream Water',
      price: 20,
      quality: 10,
      unlockPrice: 5000,
      description: 'Crisp, refreshing water that adds a subtle, refreshing taste to the beer',
    },
    {
      id: 4,
      title: 'Bavarian Spring Water',
      price: 40,
      quality: 12,
      unlockPrice: 7000,
      description: 'High-quality water with a natural mineral content that gives the beer a distinctive, refreshing taste',
    },
    {
      id: 5,
      title: 'Divine Glacier Water',
      price: 50,
      quality: 15,
      unlockPrice: 10000,
      description: 'Ultra-pure water sourced from glaciers that gives the beer a crisp, clean taste and mouthfeel',
    },
  ],
};

export const SelectionHop: SelectionModalI = {
  title: 'Hop',
  selection: [
    { id: 0, title: 'Stinky-Shoe Hop', price: 5, quality: 2, unlockPrice: 0, description: 'A bitter hop with an unpleasant, stinky aroma' },
    {
      id: 1,
      title: 'Sleepyhead Hop',
      price: 1,
      quality: 5,
      unlockPrice: 1000,
      description: 'A weak hop with little flavor and aroma, making the beer boring',
    },
    {
      id: 2,
      title: 'Boring-Lucas Hop',
      price: 5,
      quality: 10,
      unlockPrice: 3000,
      description: 'A medium strength hop that produces an average beer but lacks any special character',
    },
    {
      id: 3,
      title: 'Prankster Hop',
      price: 10,
      quality: 12,
      unlockPrice: 5000,
      description: 'A hoppy hop with a funny name that offers a good balance of bitterness and aroma',
    },
    {
      id: 4,
      title: 'Bavarian-Sky Hop',
      price: 15,
      quality: 14,
      unlockPrice: 60000,
      description: 'A highly aromatic hop with a fresh and flowery taste that elevates any beer to an experience',
    },
    {
      id: 5,
      title: 'Schuhplattler Hop',
      price: 20,
      quality: 20,
      unlockPrice: 10000,
      description: 'A strong hop with a robust flavor and aroma that delights the palate and turns a good beer into an experience',
    },
  ],
};

export const SelectionMalt: SelectionModalI = {
  title: 'Malt',
  selection: [
    { id: 0, title: 'Moldy Malt', price: 10, quality: 2, unlockPrice: 0, description: 'A poorly stored malt with a moldy taste and aroma' },
    {
      id: 1,
      title: 'Stale Malt',
      price: 15,
      quality: 5,
      unlockPrice: 10000,
      description: 'An old malt with a stale flavor that makes the beer taste flat and boring',
    },
    {
      id: 2,
      title: 'Boring-Barry Malt',
      price: 10,
      quality: 10,
      unlockPrice: 4000,
      description: 'A plain malt that lacks character and flavor',
    },
    {
      id: 3,
      title: 'Mischievous Malt',
      price: 15,
      quality: 15,
      unlockPrice: 8000,
      description: 'A flavorful malt with a unique character that adds complexity to the beer',
    },
    {
      id: 4,
      title: 'Bavarian Beauty Malt',
      price: 10,
      quality: 18,
      unlockPrice: 10000,
      description: 'A high-quality malt with a rich, sweet flavor that elevates the beer to a new level',
    },
    {
      id: 5,
      title: 'Alpenfire Malt',
      price: 15,
      quality: 20,
      unlockPrice: 15000,
      description: 'A top-tier malt with a smoky, caramelized flavor that gives the beer a deep, complex character',
    },
  ],
};
