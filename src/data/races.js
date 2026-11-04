// Set image to a public/ path or HTTPS URL and supply imageAlt.
// flourish accepts a numeric visualization ID or a published Flourish URL.
// With flourish: null, articles render instead. Add { title, url } entries to articles.
const description = "Election analysis and reporting will appear here.";
export const federalRaces = [
  {
    id: "il09",
    title: "Illinois-09 9th Congressional District",
    layout: "image-left",
    image: null,
    imageAlt: "",
    flourish: null,
    articles: [{
      title: "Your article headline",
      url: "https://dailynorthwestern.com/your-article/",
    }],
    description,
  },
  {
    id: "us-senate",
    title: "U.S. Senate",
    layout: "image-right",
    image: null,
    imageAlt: "",
    flourish: null,
    articles: [],
    description,
  },
];
export const stateRaces = [
  {
    id: "governor",
    title: "Illinois Governor",
    layout: "image-left",
    image: "https://dailynorthwestern.com/wp-content/uploads/2026/11/jb.jpg",
    imageAlt: "Gov. JB Pritzker is projected to win reelection to his third term, defeating Republican challenger and former Illinois state representative Darren Bailey.",
    flourish: null,
    articles: [{
      title: "JB Pritzker projected to win reelection",
      url: "https://dailynorthwestern.com/2026/11/03/lateststories/jb-pritzker-projected-to-win-reelection/",
    }],
    description: `Gov. JB Pritzker is projected to win reelection to his third term, defeating Republican challenger and former Illinois state representative Darren Bailey.

The Associated Press called the race for Pritzker when polls closed at 7 p.m. 

 — Reported by Gabe Hawkins`,
  },
  {
    id: "state-senate-9",
    title: "Illinois State Senate District 9",
    layout: "image-right",
    image: null,
    imageAlt: "",
    flourish: null,
    articles: [],
    description,
  },
  {
    id: "state-house-18",
    title: "18th District State Rep",
    layout: "image-left",
    image: null,
    imageAlt: "",
    flourish: null,
    articles: [],
    description,
  },
  {
    id: "state-house-17",
    title: "17th District Illinois State Rep",
    layout: "image-right",
    image: null,
    imageAlt: "",
    flourish: null,
    articles: [],
    description,
  },
];
