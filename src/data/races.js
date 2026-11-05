// Set image to a public/ path, imported image or HTTPS URL and supply imageAlt.
// imageCredit format: "Lauren Shein/The Daily Northwestern"; empty credits are hidden.
// datawrapper accepts the iframe HTML copied from Datawrapper Publish & Embed.
// The optional accompanying script can be included; resizing is handled by the component.
// Set datawrapper: null to omit the chart. Articles always render below it.
import biss from "../assets/Biss.jpg";
import stratton from "../assets/stratton.jpg";

const description = "Election analysis and reporting will appear here.";
export const federalRaces = [
  {
    id: "il09",
    title: "Illinois’ 9th Congressional District",
    layout: "image-left",
    image: biss,
    imageAlt: "Daniel Biss",
    imageCredit: "Quinn Yates/The Daily Northwestern",
    datawrapper: '<iframe title="U.S. House IL-09 Election" aria-label="Bar Chart" id="datawrapper-chart-RueGZ" src="https://datawrapper.dwcdn.net/RueGZ/40/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="143" data-external="1"></iframe><script type="text/javascript">(function(){function e(){window.addEventListener(`message`,function(e){if(e.data[`datawrapper-height`]!==void 0){var t=document.querySelectorAll(`iframe`);for(var n in e.data[`datawrapper-height`])for(var r=0,i;i=t[r];r++)if(i.contentWindow===e.source){var a=e.data[`datawrapper-height`][n]+`px`;i.style.height=a}}})}e()})();</script>',
    articles: [
      {
        title: "Biss wins Illinois’ 9th Congressional District race",
        url: "https://dailynorthwestern.com/2026/11/03/city/biss-projected-to-win-illinois-9th-congressional-district-race/",
      },
    ],
    description: `Former Mayor Daniel Biss will represent Illinois’ 9th Congressional District in the U.S. House of Representatives, marking the district’s first leadership change since U.S. Rep. Jan Schakowsky (D-Evanston) won the seat in 1999.

The Associated Press called the race for Biss at 7:50 p.m. 
— Reported by Allison Kuester and Max Turetzky`,
  },
  {
    id: "us-senate",
    title: "U.S. Senate",
    layout: "image-right",
    image: stratton,
    imageAlt: "Juliana Stratton",
    imageCredit: "Karim Melek/The Daily Northwestern",
    datawrapper: '<iframe title="U.S. Senate Election" aria-label="Bar Chart" id="datawrapper-chart-B5uUi" src="https://datawrapper.dwcdn.net/B5uUi/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="143" data-external="1"></iframe><script type="text/javascript">(function(){function e(){window.addEventListener(`message`,function(e){if(e.data[`datawrapper-height`]!==void 0){var t=document.querySelectorAll(`iframe`);for(var n in e.data[`datawrapper-height`])for(var r=0,i;i=t[r];r++)if(i.contentWindow===e.source){var a=e.data[`datawrapper-height`][n]+`px`;i.style.height=a}}})}e()})();</script>',
    articles: [
      {
        title: "Stratton projected to win U.S. Senate race",
        url: "https://dailynorthwestern.com/2026/11/03/city/stratton-wins-u-s-senate-race/",
      },
    ],
    description: `Democratic Lt. Gov. Juliana Stratton is projected to win her U.S. Senate race Tuesday night, defeating Republican Don Tracy.

The race was called for Stratton by the Associated Press at poll closing. 
— Reported by Kieran Blake and Karim Melek`,
  },
];
export const stateRaces = [
  {
    id: "governor",
    title: "Governor",
    layout: "image-left",
    image: "https://dailynorthwestern.com/wp-content/uploads/2026/11/jb.jpg",
    imageAlt:
      "Gov. JB Pritzker is projected to win reelection to his third term, defeating Republican challenger and former Illinois state representative Darren Bailey.",
    imageCredit: "Emma Edmund/The Daily Northwestern",
    datawrapper: '<iframe title="Illinois Governor Election" aria-label="Bar Chart" id="datawrapper-chart-us1Ah" src="https://datawrapper.dwcdn.net/us1Ah/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="143" data-external="1"></iframe><script type="text/javascript">(function(){function e(){window.addEventListener(`message`,function(e){if(e.data[`datawrapper-height`]!==void 0){var t=document.querySelectorAll(`iframe`);for(var n in e.data[`datawrapper-height`])for(var r=0,i;i=t[r];r++)if(i.contentWindow===e.source){var a=e.data[`datawrapper-height`][n]+`px`;i.style.height=a}}})}e()})();</script>',
    articles: [
      {
        title: "JB Pritzker projected to win reelection",
        url: "https://dailynorthwestern.com/2026/11/03/lateststories/jb-pritzker-projected-to-win-reelection/",
      },
    ],
    description: `Gov. JB Pritzker is projected to win reelection to his third term, defeating Republican challenger and former Illinois state representative Darren Bailey.

The Associated Press called the race for Pritzker when polls closed at 7 p.m. 
— Reported by Gabe Hawkins`,
  },
  {
    id: "state-senate-9",
    title: "Illinois' 9th State Senate District",
    layout: "image-right",
    image:
      "https://dailynorthwestern.com/wp-content/uploads/2026/11/DSC05724-1200x800.jpg",
    imageAlt:
      "Hanley previously served as president of the New Trier Democrats and co-founded advocacy group Operation Swing State.",
    imageCredit: "Michelle Wu/The Daily Northwestern",
    datawrapper: '<iframe title="Illinois State Senate District 9 Election" aria-label="Bar Chart" id="datawrapper-chart-mIBy9" src="https://datawrapper.dwcdn.net/mIBy9/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="143" data-external="1"></iframe><script type="text/javascript">(function(){function e(){window.addEventListener(`message`,function(e){if(e.data[`datawrapper-height`]!==void 0){var t=document.querySelectorAll(`iframe`);for(var n in e.data[`datawrapper-height`])for(var r=0,i;i=t[r];r++)if(i.contentWindow===e.source){var a=e.data[`datawrapper-height`][n]+`px`;i.style.height=a}}})}e()})();</script>',
    articles: [
      {
        title: "Patrick Hanley projected to win 9th District State Senate race",
        url: "https://dailynorthwestern.com/2026/11/03/lateststories/patrick-hanley-projected-to-win-9th-district-state-senate-race/",
      },
    ],
    description: `Winnetka small business owner and Democratic organizer Patrick Hanley is projected to win over Republican candidate Tom Lally in the race to represent Illinois’ 9th District in the State Senate, according to FOX 32 Chicago. 

As of 8:17 p.m., Hanley had received 82.27% of the vote according to data from the Cook County Clerk’s office. 
— Reported by Michelle Wu`,
  },
  {
    id: "state-house-17",
    title: "Illinois' 17th State House District",
    layout: "image-right",
    image:
      "https://dailynorthwestern.com/wp-content/uploads/2020/08/KICKOFF_Melanie-Lust_WEB-900x600-1.jpg",
    imageAlt: "",
    imageCredit: "Daily file photo by Melanie Lust",
    datawrapper: '<iframe title="Illinois 17th District State Representative Election" aria-label="Bar Chart" id="datawrapper-chart-SmxdY" src="https://datawrapper.dwcdn.net/SmxdY/26/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="143" data-external="1"></iframe><script type="text/javascript">(function(){function e(){window.addEventListener(`message`,function(e){if(e.data[`datawrapper-height`]!==void 0){var t=document.querySelectorAll(`iframe`);for(var n in e.data[`datawrapper-height`])for(var r=0,i;i=t[r];r++)if(i.contentWindow===e.source){var a=e.data[`datawrapper-height`][n]+`px`;i.style.height=a}}})}e()})();</script>',
    articles: [
      {
        title:
          "Incumbent Jennifer Gong-Gershowitz projected to clinch 5th consecutive term serving 17th District in Illinois House of Representatives",
        url: "https://dailynorthwestern.com/2026/11/03/city/incumbent-jennifer-gong-gershowitz-projected-to-clinch-5th-consecutive-term-serving-17th-district-in-illinois-house-of-representatives/",
      },
    ],
    description: `Incumbent State Rep. Jennifer Gong-Gershowitz (D-Glenview) is projected to win her fifth consecutive term representing the 17th district of the Illinois House of Representatives on Tuesday. She secured 75.46% of the vote as of 8:39 p.m., according to Cook County Clerk’s office.

The Associated Press called the race in favor of Gong-Gershowitz at 8:34 p.m. 
— Reported by Lauren Shein`,
  },
  {
    id: "state-house-18",
    title: "Illinois' 18th State House District",
    layout: "image-left",
    image:
      "https://dailynorthwestern.com/wp-content/uploads/2023/01/gabel.jpeg",
    imageAlt: "",
    imageCredit: "Daily file photo by Courtney Morrison",
    datawrapper: '<iframe title="Illinois 18th District State Representative Election" aria-label="Bar Chart" id="datawrapper-chart-LQziq" src="https://datawrapper.dwcdn.net/LQziq/18/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="143" data-external="1"></iframe><script type="text/javascript">(function(){function e(){window.addEventListener(`message`,function(e){if(e.data[`datawrapper-height`]!==void 0){var t=document.querySelectorAll(`iframe`);for(var n in e.data[`datawrapper-height`])for(var r=0,i;i=t[r];r++)if(i.contentWindow===e.source){var a=e.data[`datawrapper-height`][n]+`px`;i.style.height=a}}})}e()})();</script>',
    articles: [
      {
        title:
          "State House Majority Leader Robyn Gabel projected to win reelection",
        url: "https://dailynorthwestern.com/2026/11/03/lateststories/state-house-majority-leader-robyn-gabel-projected-to-win-reelection-2/",
      },
    ],
    description: `Illinois House Majority Leader and State Rep. Robyn Gabel (D-Evanston) is projected to win reelection and serve her ninth term in the state House of Representatives, according to the Associated Press. 

The Associated Press called the race in favor of Gabel at 8:07 p.m., according to FOX 32 Chicago. 
— Reported by Deolu Akingbade`,
  },
];
