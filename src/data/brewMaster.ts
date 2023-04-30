export interface BrewMasterI {
  id: number;
  name: string;
  salary: number;
  productivity: number;
  unlockPrice: number;
  description: string;
}

export interface BrewMasterModalI {
  title: 'Brew Master';
  possibleBrewMasters: BrewMasterI[];
}

export const BrewMasterModal: BrewMasterModalI = {
  title: 'Brew Master',
  possibleBrewMasters: [
    {
      id: 0,
      name: 'Sloppy Steve',
      salary: 30,
      productivity: 0.2,
      unlockPrice: 0,
      description: 'A brewmaster who doesnt pay attention to details and makes mistakes in the brewing process',
    },
    {
      id: 1,
      name: 'Bland Bobby',
      salary: 120,
      productivity: 0.3,
      unlockPrice: 1000,
      description: 'A brewmaster who plays it safe with simple, uninteresting beer recipes',
    },
    {
      id: 2,
      name: 'Mediocre Max',
      salary: 500,
      productivity: 0.4,
      unlockPrice: 5000,
      description: 'A brewmaster who has some skill but lacks the creativity to make truly exceptional beers',
    },
    {
      id: 3,
      name: 'Creative Carla',
      salary: 800,
      productivity: 0.6,
      unlockPrice: 10000,
      description: 'A talented brewmaster who experiments with different ingredients and techniques to create unique and interesting beers',
    },
    {
      id: 4,
      name: 'Masterful Maxine',
      salary: 1000,
      productivity: 0.8,
      unlockPrice: 15000,
      description: 'A highly skilled brewmaster who consistently produces high-quality beers with great taste and complexity',
    },
    {
      id: 5,
      name: 'Legendary Ludwig',
      salary: 1500,
      productivity: 1,
      unlockPrice: 20000,
      description:
        'An iconic brewmaster with years of experience and a deep understanding of the brewing process. Ludwigs beers are renowned for their exceptional taste and balance of flavors',
    },
  ],
};
