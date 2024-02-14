<script>
    import { onMount, afterUpdate } from "svelte";
    import Grid from "$lib/components/Grid.svelte";
    import downArrow from "$lib/assets/down-arrow.svg";

    let header;
    let portfolio;
    let showHeaderButton = false;


    let snapper;

    let y;

    onMount(() => {
        observeSections();
    });

    afterUpdate(() => {
        observeSections();
    });

    function observeSections() {
        const observerOptions = {
            threshold: 0.5, // Adjust threshold as needed
        };

        const observerHeader = new IntersectionObserver(([entry]) => {
            showHeaderButton =
                entry.isIntersecting &&
                entry.intersectionRatio >= observerOptions.threshold;
        }, observerOptions);



        observerHeader.observe(header);

    }

    function linkScroller(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
    <title>MapCourt Portfolio</title>
    <meta name="description" content="Courtney Cox's portfolio website" />
</svelte:head>

<main>
    <div class="outer-container">
        <div class="snapper">
            <div class="section-container">
                <section id="header" bind:this={header} class="center-content">
                    <div class="left-align">
                        <h1>Hi, I'm Court.</h1>
                        <h2>I make maps + other things, too.</h2>
                        <h3>
                            I'm a 2023-24 <a
                                target="_blank"
                                href="https://www.nytco.com/person/courtney-cox/"
                                >New York Times fellow.</a
                            >
                        </h3>
                        <h4>
                            Tap <a
                                href="#"
                                on:click={() => linkScroller("about")}>here</a
                            >
                            to learn more about me,
                            <br class="mobile-break" />or
                            <a
                                href="#"
                                on:click={() => linkScroller("portfolio")}
                                >here</a
                            >
                            to view my work.
                        </h4>
                    </div>
                    {#if showHeaderButton}
                        <button
                            class="scroll-arrow"
                            on:click={() => linkScroller("about")}
                        >
                            <img src={downArrow} alt="down arrow" />
                        </button>
                    {/if}
                </section>
            </div>
            <div class="section-container">
                <section id="about" class="center-content">
                    <div class="left-align-about left-align">
                        <h2 class="center-header">About me</h2>
                        <p>
                            My full name is Courtney Cox, but Court will do just
                            fine.
                        </p>
                        <h3>My degrees</h3>
                        <p>
                            I have a bachelor's degree in Creative Writing and a
                            master's degree in Digital Mapping.
                        </p>
                        <p>
                            <em>Shoutout to my fellow cartographer-poets. <a
                                href="mailto: courtneygcox96@gmail.com">Email me</a
                                > if you exist.</em
                            >
                        </p>
                        <h3>Of note</h3>
                        <p>
                            See <a href="#">my résumé</a> for the deets on my
                            work with <a href="https://www.nytimes.com/section/upshot" target='_blank'>The Upshot/New York Times</a>,
                            some notes on my other work +
                            scholarships & awards I've received.
                        </p>
                        <h3>A few of my favorite things</h3>
                        <div class="favorites">
                            <p class="before-arrow">
                                <span class="favorite"
                                    >My favorite <a href="#">map</a>.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">novel</a>.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">poem</a>.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">place to be</a
                                    >.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">language</a>.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">dog</a>.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">video game</a
                                    >.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">polygon</a>.</span
                                >
                                <span class="favorite"
                                    >My favorite <a href="#">map fact</a>.</span
                                >
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="section-container">
                <section
                    bind:this={portfolio}
                    id="portfolio"
                    class="center-content"
                >
                    <div class="left-align">
                        <h2 class="center-header">Portfolio</h2>
                        <Grid items />
                    </div>
                    
                </section>

            </div>
            <div class="section-container">
                <section id="outro" class="center-content left-align">
                    <div>
                        <h2 class="center-header">Enough about me</h2>
                        <p>Tell me about you!🤩</p>
                        <p>
                            Drop me an email at <strong
                                ><a href="mailto:courtneygcox96@gmail.com">courtneygcox96@gmail.com</a></strong
                            >.
                        </p>
                        <p>
                            <strong>I'm open to</strong>: friends, employment,
                            freelance opportunities, and/or info dumps about
                            your favorite transit map.
                        </p>
                        <p>
                            (Neurodiversity & deaf🦻 friendly spaces & faces are
                            especially my jam.)
                        </p>
                        <br />
                        <p>
                            <strong>By the way!</strong> <br />Accessibility is
                            non-negotiable. <br />If I've missed the mark on any
                            part of this site, I'd love to know so I can work to
                            do better.
                        </p>
                    </div>
                    <p><a href="#header">Return to top.</a></p>
                </section>
            </div>
        </div>
    </div>
</main>

<style>
    .scroll-arrow {
        width: 40px;
        height: 40px;
        padding-top: 55px;
        /* position: absolute; */
        /* bottom: 20px; */
        background: none;
        border: none;
        cursor: pointer;
    }

    .section-container {
        position: relative;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .center-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: "helvetica neue", sans-serif;
        flex-direction: column;
    }

    .before-arrow {
        margin-bottom: 0;
    }

    .favorites {
        text-align: justify;
        text-justify: inter-word;
    }

    .favorite {
        margin-right: auto 3px;
    }

    #header,
    #about,
    #portfolio,
    #outro {
        height: auto;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
        margin: 10px auto;
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }

    .section-container #portfolio {
        margin-bottom: 40px;
    }

    .left-align {
        text-align: left;
        max-width: 80%;
    }

    @media screen and (max-width: 600px) {
        .left-align-about {
            text-align: left;
            max-width: 80%;
            margin-top: 5px;
        }
    }

    .outer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: "helvetica neue", sans-serif;
        flex-direction: column;
        max-width: 100%;
    }

    .snapper {
        align-items: center; /* Centering collectively */
        height: 100vh;
        overflow-y: scroll;
        margin-top: 3px;
        scroll-snap-type: y proxmity;
    }

    .snapper section {
        scroll-snap-align: start;
        width: 100%;
        scroll-snap-stop: always; /* Ensures each section snaps neatly */
    }

    @media screen and (min-width: 600px) {
        .mobile-break {
            display: none;
        }
    }

    h1 {
        font-size: 4rem;
        margin: 0;
    }

    h2 {
        font-size: 2rem;
        margin: 5px 0 auto;
    }

    h3,
    h4 {
        margin: 15px 0;
    }

    a {
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #000;
        cursor: pointer;
    }

    .center-header {
        text-align: center;
    }

    p {
        line-height: 1.5;
    }
</style>
