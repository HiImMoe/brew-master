export interface DriverI {
  id: number;
  name: string;
  salary: number;
  productivity: number;
  unlockPrice: number;
  description: string;
}

export interface DriverModalI {
  title: string;
  possibleDrivers: DriverI[];
}

export const DriverModal: DriverModalI = {
  title: 'Beer Driver',
  possibleDrivers: [
    {
      id: 0,
      name: 'Careless Carl',
      salary: 10,
      productivity: 0.1,
      unlockPrice: 0,
      description: 'A beer driver who doesnt handle the beer with care, causing it to get damaged or spoiled during transport',
    },
    {
      id: 1,
      name: 'Lazy Larry',
      salary: 200,
      productivity: 0.2,
      unlockPrice: 1000,
      description: 'A beer driver who doesnt take his job seriously and often shows up late or skips deliveries altogether',
    },
    {
      id: 2,
      name: 'Average Andy',
      salary: 400,
      productivity: 0.4,
      unlockPrice: 3000,
      description:
        'A beer driver who does his job competently but doesnt go above and beyond to ensure the beer is delivered in optimal condition',
    },
    {
      id: 3,
      name: 'Reliable Rachel',
      salary: 600,
      productivity: 0.6,
      unlockPrice: 5000,
      description: 'A beer driver who takes pride in her work and consistently delivers the beer on time and in good condition',
    },
    {
      id: 4,
      name: 'Expert Eddie',
      salary: 800,
      productivity: 0.8,
      unlockPrice: 8000,
      description:
        'A beer driver who has extensive knowledge of different beer styles and understands how to properly handle and transport them for maximum freshness and flavor',
    },
    {
      id: 5,
      name: 'Perfect Patty',
      salary: 1000,
      productivity: 1,
      unlockPrice: 10000,
      description:
        'An exceptional beer driver who is a true professional and treats each delivery with the utmost care and attention to detail, ensuring that the beer arrives in perfect condition every time',
    },
  ],
};
