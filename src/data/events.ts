export interface EventI {
  title: string;
  text: string;
}

export const events: EventI[] = [
  {
    title: 'The brew master puked into the beer',
    text: 'Unfortunately your Brew Master was so drunk that he puked into the brew kettle. The brew process must be start again',
  },
  {
    title: 'The beer driver lost his kegs',
    text: 'Unfortunately your beer driver lost his kegs because he was too drunk. You need to produce new kegs',
  },
];
