<script>


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
                    <h1>hi, I'm court. :)</h1>
                    <h2>I make maps + other things, too.</h2>
                    <h3>I'm a 2023-24 New York Times fellow.</h3>
                    <h4>
                        Tap <a href="#" on:click={() => scrollToSection('about')}>here</a> to learn more about me,
                        <br class="mobile-break" />or
                        <a href="#" on:click={() => scrollToSection('portfolio')}>here</a> to view my work.
                    </h4>
                </div>
            </section>
            <section id="about" class="center-content">
                <div class=left-align>
                    <h2>About me</h2>
                    <h3>My favorite place to be is down a rabbit hole.</h3>
                </div>
            </section>
            <section id="portfolio" class="center-content left-align">
                <div>
                    <h2>Portfolio</h2>
                </div>
            </section>
            <section id="outro" class="center-content left-align">
                <div>
                    <h2>Outro</h2>
                </div>
            </section>
        </div>
    </div>
</main>

<style>
    #header,
    #about,
    #portfolio,
    #outro {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center; /* Added this line for centering text */
    }

    .left-align {
        text-align: left;
        max-width: 80%;
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
        margin: 10px 0 auto;
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
</style>
