import heroImage from '../assets/hero.png';

// Image paths in public/ can start with /; the component adds Astro's base.
export const election = {
  title: '2026 MIDTERM ELECTIONS',
  subtitle: "Welcome to The Daily Northwestern's coverage of the 2026 Midterms.",
  liveCoverage: {
    text: "TRACK THE DAILY'S LIVE COVERAGE HERE",
    url: 'https://dailynorthwestern.com/2026/11/03/city/live-evanston-residents-vote-in-2026-midterm-elections/', // Replace with the published live coverage URL.
  },
  hero: {
    image: heroImage,
    imageAlt: 'Midterm election coverage illustration with I Voted stickers and a map.',
    blurb: `Polls closed in Evanston at 7 p.m., concluding an election cycle marked by major retirements. The March 17 primary elections featured competitive races to represent the city in the Illinois State Senate, U.S. House of Representatives and U.S. Senate. Democrats were heavily favored in all general election races.`,
  },
  raceSections: [
    {
      id: 'federal-races',
      heading: 'FEDERAL RACES',
      cards: [
        { id: 'race-1', label: '' },
        { id: 'race-2', label: '' },
        { id: 'race-3', label: '' },
        { id: 'race-4', label: '' },
      ],
    },
  ],
};
