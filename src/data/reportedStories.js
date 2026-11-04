export const reportedStories = [
  {
    id: 'evanston-live',
    title: 'Live: Evanston residents vote in 2026 midterm elections',
    author: 'The Daily Northwestern Staff',
    authorUrl: 'https://dailynorthwestern.com/staff_name/the-daily-northwestern-staff/',
    date: 'November 3, 2026',
    dateISO: '2026-11-03',
    url: 'https://dailynorthwestern.com/2026/11/03/city/live-evanston-residents-vote-in-2026-midterm-elections/',
    image: 'https://dailynorthwestern.com/wp-content/uploads/2026/11/Unitarian-polling-site-entrance-Lauren-1200x800.jpg',
    imageAlt: 'Entrance to a Unitarian polling site in Evanston.',
  },
  // Replace these entries with published articles. Empty URLs render as non-link placeholders.
  ...Array.from({ length: 11 }, (_, index) => ({
    id: `upcoming-${index + 1}`,
    title: 'Upcoming election story',
    author: '',
    date: '',
    url: '',
    image: '',
  })),
];
