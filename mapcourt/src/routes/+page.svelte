<script>
    import Grid from "$lib/components/Grid.svelte";


    // Function to handle smooth scrolling
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

   
</script>

<svelte:head>
    <title>Courtney Cox</title>
    <meta name="description" content="Courtney Cox's portfolio website" />
</svelte:head>

<main>
    <div class="outer-container">
        <div class="snapper">
            <section id="header" class="center-content">
                <div class="left-align">
                    <h1>Hi, I'm Court.</h1>
                    <h2>I make maps + other things, too.</h2>
                    <h3>I'm a 2023-24 <a target='_blank' href='https://www.nytco.com/person/courtney-cox/'>New York Times fellow.</a></h3>
                    <h4>
                        Tap <a
                            href="#"
                            on:click={() => scrollToSection("about")}>here</a
                        >
                        to learn more about me,
                        <br class="mobile-break" />or
                        <a
                            href="#"
                            on:click={() => scrollToSection("portfolio")}
                            >here</a
                        > to view my work.
                    </h4>
                </div>
            </section>
            <section id="about" class="center-content">
                <div class="left-align-about left-align">
                    <h2 class="center-header">About me</h2>
                    <p>My full name is Courtney Cox, but Court will do just fine.</p>
                    <h3>My degrees</h3>
                    <p>
                        I have a bachelor's degree in Creative Writing and a
                        master's degree in Digital Mapping.
                    </p>
                    <p>
                        <em
                            >Shoutout to my fellow cartographer-poets. <a href='#'>Email me</a> if you exist.</em
                        >
                    </p>
                    <h3>Of note</h3>
                    <p>
                        See <a href="#">my résumé</a> for the deets on my work
                        with <a href="#">The Upshot/New York Times</a>, some
                        notes on my other journalistic work + scholarships &
                        awards I've received.
                    </p>
                    <!-- <p>See my resume for the deets.</p>
                    <p>
                        - I won an award for undergraduate research I completed while a visiting student at the Unviersity of Oxford. 
                    </p>
                    <p>
                        - I won a Major League Hackers award with my all-girls team for a choose-your-own adventure game called <em>Marian the Librarian</em>.
                    </p>
                    <p>
                        - I completed a data fellowship with the McClatchy D.C. Bureau/Miami Herald.
                    </p>
            
                    <p>
                        - Currently, I work in The Upshot at The New York Times, as a member of the 2023-24 fellowship class.
                    </p> -->

                    <h3>A few of my favorite things</h3>
                    <div class="favorites">
                        <p>
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
                                >My favorite <a href="#">place to be</a>.</span
                            >
                            <span class="favorite"
                                >My favorite <a href="#">language</a>.</span
                            >
                            <span class="favorite"
                                >My favorite <a href="#">dog</a>.</span
                            >
                            <span class="favorite"
                                >My favorite <a href="#">video game</a>.</span
                            >
                            <span class="favorite"
                                >My favorite <a href="#">polygon</a>.</span
                            >
                            <span class="favorite"
                                >My favorite <a href="#">map fact</a>.</span
                            >
                        </p>

                        <p style="padding-top: 3px;">
                            <strong
                                >Up next: <a
                                    href="#"
                                    on:click={() =>
                                        scrollToSection("portfolio")}
                                    >PORTFOLIO</a
                                >.</strong
                            >
                        </p>
                    </div>
                </div>
            </section>
            <section id="portfolio" class="center-content">
                <div class="left-align">
                    <h2 class="center-header">Portfolio</h2>
                    <Grid items={portfolioItems} />
                </div>
            </section>
            <section id="outro" class="center-content left-align">
                <div>
                    <h2 class="center-header">Enough about me</h2>

                    <p>Tell me about you!🤩</p>
                    <p>Drop me an email at <strong>courtneygcox96@gmail.com</strong>.</p>
                    <p><strong>I'm open to</strong>: friends, employment, freelance opportunities, and/or info dumps about your favorite transit map.</p>
                    <p>(Neurodiversity & deaf🦻 friendly spaces & faces are especially my jam.)</p>
                    <br/>
                    <p><strong>By the way!</strong> <br/>Accessibility is non-negotiable. <br/>If I've missed the mark on any part of this site, I'd love to know so I can work to do better.</p>
                </div>
                <p><a href='#header'>Return to top.</a></p>
            </section>
        </div>
    </div>
</main>

<style>
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
        text-align: center; /* Added this line for centering text */
        min-height: 100vh;
        margin: 10px auto;
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }

    .left-align {
        text-align: left;
        max-width: 80%;
    }

    @media screen and (max-width: 600px) {
        .left-align-about {
            text-align: left;
            max-width: 80%;
            height: 100vh;
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
    }

    .snapper {
        align-items: center; /* Centering collectively */
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        margin-top: 3px;
    }

    .snapper section {
        scroll-snap-align: start;
        width: 100%; /* Full width for each section */
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
