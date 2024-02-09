import rabbit from "$lib/assets/rabbit-hole.jpg";
import prettyMap from "$lib/assets/pretty-map.png";
import flashback from "$lib/assets/flashback.png";
import miamiDade from "$lib/assets/miami-dade.png";
import worldCup from "$lib/assets/world-cup.png";
import metros from "$lib/assets/metros.png";
import darts from "$lib/assets/darts.png";
import documentation from "$lib/assets/documentation.png";
import tilt from "$lib/assets/tilt.png";
import hearing from "$lib/assets/hearing.png";

export const items = [{
        id: 1,
        imageId: prettyMap,
        alt: "A brightly colored globe",
        title: "a Sveltekit + Mapbox GL component library",
        context: "a world with more maps is a better world, so I developed this component library.",
        url: "https://bit.ly/mapcourt",
    },
    {
        id: 2,
        imageId: flashback,
        alt: "screenshot of Flashback promo cover",
        title: "Flashback: the New York Times's History Game",
        context: "in which my rabbit hole research skills are put to fantastic use",
        url: "https://www.nytimes.com/spotlight/flashback",
    },
    {
        id: 3,
        imageId: worldCup,
        alt: "screenshot of pink and green matrix chart",
        title: "Women's World Cup: How Teams Can Advance",
        context: "design, develop, watch soccer, repeat.",
        url: "https://www.nytimes.com/interactive/2023/upshot/womens-world-cup-standings.html",
    },
    {
        id: 4,
        imageId: darts,
        alt: "screenshot of dartboard showing locations of several throws",
        title: "did somebody say darts?",
        context: "extremely precise graphics I desgined for a story about extreme precision.",
        url: "https://www.nytimes.com/2023/08/05/upshot/darts-sports-perfection.html",
    },
    {
        id: 5,
        imageId: metros,
        title: "pandemic migration in major metros",
        context: "more charts, made with Svelte (and lots of CSS).",
        url: "https://www.nytimes.com/interactive/2023/06/17/upshot/17migration-patterns-movers.html",
    },
    {
        id: 6,
        imageId: hearing,
        alt: "screenshot of a hearing test with the title: How to Read a Hearing Test, depicting various levels of hearing loss",
        title: "how to read a hearing test",
        context: "useful explainer graphic.",
        url: "#",
    },
    {
        id: 7,
        imageId: miamiDade,
        title: "where is Miami-Dade County hottest?",
        alt: "screenshot of a map of Miami-Dade County, Florida, with a heatmap displaying heat data",
        context: "fun fact: I won a scholarship for this map, which started with geoTIFFs (iykyk) and came out pretty",
        url: "https://flo.uri.sh/visualisation/10682312/embed?auto=1",
    },
    {
        id: 8,
        imageId: documentation,
        alt: "screenshot from tutorial showing technical text and mapping software interface",
        title: "tutorial writing: a journalist's guide to styling geoTIFFs for the web",
        context: "when the tutorial doesn't exist, you figure it out, then write it yourself, and offer it up",
        url: "https://github.com/coxco96/miami-floods",
    },
    {
        id: 9,
        imageId: tilt,
        alt: "screenshot of a horizontal bar chart titled: When 2024 Republican Delegates Will Be Awarded",
        title: "what goes together better than politics and charts?",
        context: "designed for Nate Cohn's newsletter, The Tilt",
        url: "https://www.nytimes.com/2023/08/28/upshot/trump-trial-primary-calendar.html",
    },
    // Add more portfolio items as needed
];