import rollImage from "../assets/roll.png";

// Image paths in public/ can start with /; the component adds Astro's base.
export const election = {
  title: "2026 MIDTERM ELECTIONS",
  credits: [
    { role: "Editor in Chief", name: "Anavi Prakash" },
    { role: "Web Developer", name: "Eunice Lee" },
    { role: "Creative Director", name: "Cayla Labgold-Carroll" },
    { role: "City Editor", name: "Claire Coffey" },
    { role: "Illustrations Editor", name: "Charlotte Nagel" },
  ],
  subtitle:
    "Welcome to The Daily Northwestern's coverage of the 2026 Midterms.",
  liveCoverage: {
    text: "TRACK THE DAILY'S LIVE COVERAGE HERE",
    url: "https://dailynorthwestern.com/2026/11/03/city/live-evanston-residents-vote-in-2026-midterm-elections/", // Replace with the published live coverage URL.
  },
  hero: {
    image: rollImage,
    imageAlt: "A roll of I Voted stickers for the 2026 election.",
    blurb: `The 2026 Midterm Elections marked a once-in-a-generation opportunity for Evanston residents to decide who will represent them in Evanston in Springfield and Washington as Illinois saw an exodus of elected officials this year.

From traveling to polls across the city to attending campaign watch parties, The Daily staff provided live updates to document the perspectives of Evanston voters and election results throughout the day.

Thank you to the reporters, editors, multimedia staff and the city assistant team for your tireless work that made this coverage possible.

— Claire Coffey, City Editor`,
  },
  raceSections: [
    {
      id: "federal-races",
      heading: "FEDERAL RACES",
      cards: [
        { id: "race-1", label: "" },
        { id: "race-2", label: "" },
        { id: "race-3", label: "" },
        { id: "race-4", label: "" },
      ],
    },
  ],
};
