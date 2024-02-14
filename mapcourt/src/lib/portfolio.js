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
import lips from "$lib/assets/lips.png";
import modelCall from "$lib/assets/model-call.png";
import parks from "$lib/assets/parks.png";
import redlines from "$lib/assets/redlining.png";
import traffic from "$lib/assets/trafficlights.gif";
import pills from "$lib/assets/pills.png";
import hospital from "$lib/assets/hospital.jpg";
import breweries from "$lib/assets/breweries.png";
import earth from "$lib/assets/earth.png";

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
        title: "women's world cup 2024: who's in? who's out? (a live interactive)",
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
        imageId: lips,
        alt: "lip illustration under text that reads: can you read my lips? Here's what to know before you ask.",
        title: "made for Instagram: can you read my lips?",
        context: "a social media explainer designed for the University of Kentucky Human Development Institute",
        url: "https://www.instagram.com/p/Cqnnxnauxw_/?img_index=1"

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
    {
        id: 10,
        imageId: hearing,
        alt: "screenshot of a hearing test with the title: How to Read a Hearing Test, depicting various levels of hearing loss",
        title: "how to read a hearing test",
        context: "useful explainer graphic.",
        url: "#",
    },

    {
        id: 11,
        imageId: modelCall,
        alt: "social media graphic with text that reads: nothing about us without us, and explains that the mission of the organization is to improve the lives of all people with disabilities, and that diverse identities are celebrated.",
        title: "nothing about us without us: a model call",
        context: "a social media model call to increase disability representation in stock photography",
        url: "https://www.instagram.com/p/Cn0AC14Or_4/?img_index=5"
    },

    {
        id: 12,
        imageId: parks,
        alt: "",
        title: "social media: how to get a lifetime national parks pass",
        context: "social media how-to",
        url: "https://www.instagram.com/p/Csb2CKuOYBH/?img_index=1"
    },

    {
        id: 13,
        imageId: redlines,
        alt: "screenshot of a map, showing HOLC grade D with parts of a heat map highlighted and outlined",
        title: "scrollytelling: where redlines intersect with the heat",
        context: "in Miami, historically redlined districts are disproportionately affected by heat",
        url: "https://coxco96.github.io/miami-redlines/"
    },
    {
        id: 14,
        imageId: traffic,
        alt: "a map with clusters that represent traffic lights, dispersing as you zoom in",
        title: "new map trick, who dis?",
        context: "traffic lights in Boston, Texas / map clusters",
        url: "https://coxco96.github.io/miami-redlines/"
    },
    {
        id: 15,
        imageId: pills,
        alt: "a map of kentucky made of red circles of various sizes",
        title: "opioid pill counts distributed by pharmacy in Kentucky",
        context: "we learn & grow. my editorial skills have blossomed since this project, but the map still looks nice.",
        url: "https://coxco96.github.io/kentucky-sackler-story/"
    },

    {
        id: 16,
        imageId: hospital,
        alt: "hospital interior",
        title: "look up your nearest hospital",
        context: "I do hope you're not on my portfolio page to find a hospital! however, if you're here to admire my geoprocessing skills, admire away.",
        url: "https://coxco96.github.io/nearest-hospital-lookup/",
    },
    {
        id: 17,
        imageId: breweries,
        alt: "screenshot of map of brewery location in North America",
        title: "north american breweries",
        context: "designed for print, but it's nice here on the web, too.",
        url: "https://coxco96.github.io/images/na_breweries_8000.png",
    },

    {
        id: 18,
        imageId: earth,
        alt: "zoomed out look at a designed earth",
        title: "my favorite Earth I've ever designed",
        context: "Earth has always been my favorite planet, but this one is especially nice. designed in Mapbox Studio",
    }


    // Add more portfolio items as needed
];