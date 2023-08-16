<script>
    import ProjectCard from '../ProjectCard.svelte'

</script>

<svelte:head>
	<title>Michal Hicz My story</title>
	<meta name="description" content="Michal Hicz My story" />
</svelte:head>

<div class="sect">
    <div class="head">
        <center>
            <div style="display:flex; justify-content: center;">
                <h2 style="font-weight: 500;" class="drac-heading drac-heading-2xl drac-text-purple-cyan">My story</h2>
                <a href="/" class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-sm">GO BACK</a>
            </div>
        </center>
    </div>
    <div class="body">
        <div class="window">
            <div class="content">
                <div class="drac-box drac-rounded-lg drac-p-md desc">
                    <p class="drac-text drac-text-purple-cyan">
                        My fascination with programming began at a young age, driven by my curiosity and desire to understand the digital world that surrounds us.
                        It was during my teenage years that I encountered my first lines of code, realizing that through programming,
                        I could wield the power to create, automate, and innovate.
                    </p><p class="drac-text drac-text-purple-cyan">
                        The interest in programming drove me on a path of constant learning and exploration.
                        As I improved my skills and navigated through the complex topics of cloud computing, operating systems and various programming concepts,
                        I discovered my passion for networking and automation. 
                    </p>
                </div>
                <div class="cards">
                    <div class="drac-box drac-bg-purple-cyan drac-rounded-lg drac-p-md card">
                        <h2 style="font-weight: 600; font-size: 2em;" class="drac-heading drac-text-black">Diving into the cloud and operating systems</h2>
                        <div style="height: 1em;"></div>
                        <p style="font-weight: 500;" class="drac-text drac-text-black drac-text-md">Over the years,
                            I have developed an understanding of the intricacies of servers and the Linux operating system, the foundations of system architecture,
                            networking protocols, and security mechanisms. 
                            My experiences have ranged from setting up and configuring servers to optimizing their performance and ensuring robust security measures, even tried to build my custom Linux distribution from scratch.
                            This hands-on experience has not only expanded my technical skills but has also given me a strong sense of responsibility in handling
                            critical infrastructures. </p>
                    </div>
                    <div class="drac-box drac-bg-purple-cyan drac-rounded-lg drac-p-md card2">
                        <h2 style="font-weight: 600; font-size: 2em;" class="drac-heading drac-text-black">Python for the win!</h2>
                        <div style="height: 1em;"></div>
                        <p style="font-weight: 500;" class="drac-text drac-text-black drac-text-md">
                            In the dynamic landscape of programming languages, Python emerged as my tool of choice.
                        Its simplicity, fast deploy times and wide array of libraries proved to be invaluable as I was improving my programming skills,
                        learning backend development and automating my daily workflows. From crafting large projects to writing scripts,
                        Python became my tool for turning ideas into solutions with minimal time spent on optimizing the codebase. </p>
                    </div>
                    <div class="drac-box drac-bg-purple-cyan drac-rounded-lg drac-p-md card col">
                        <h2 style="font-weight: 600; font-size: 2em;" class="drac-heading drac-text-black">The Nexus of Networking</h2>
                        <div style="height: 1em;"></div>
                        <p style="font-weight: 500;" class="drac-text drac-text-black drac-text-md">
                            While my programming journey encompassed a multitude of domains, I found myself most drawn to networking.
                        The complexities of networking protocols, routing mechanisms, and the intricacies of data transmission captivated my attention.
                        I discovered how data flows across networks, learning to troubleshoot issues and optimize performance.</p>
                    </div>
                </div>
                <div class="drac-box drac-rounded-lg drac-p-md desc">
                    <p class="drac-text drac-text-purple-cyan">
                        Starting with a curiosity-driven interest in programming during my youth, I have evolved into a skilled programmer with a deep understanding of servers,
                        Linux, Python, automation, and a specialization in networking.
                        Looking ahead, I am excited to continue expanding my horizons, exploring new technologies, and contributing to the ever-evolving landscape of software development. 
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .desc {
        box-shadow: inset 0 0 25px 3px #16171d;
		box-shadow: 0 0 30px 1px #16171d;
		background-color: #16171d;
        text-align:justify
    }
    .col {
        grid-column: 1 / span 2;
    }
    .cards {
        display:grid;
        margin-top: 3em;
        margin-bottom: 3em;
        grid-template-columns: auto 27em;
        grid-template-rows: auto auto;
        grid-gap: 3em;
        justify-content: center;
    }
    .card {
        width: auto;
		height: auto;
		margin: 0em;
		border-radius: 15px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 15px 1px black;
        float:left;
        display:inline;
        transition: 200ms ease-in-out;
        position: relative;
        margin-bottom: 3em;
    }
    .card2 {
        width: auto;
		height: auto;
		margin: 0em;
		border-radius: 15px;
		border-style: solid;
		border-width: 0px;
		box-shadow: 0 0 15px 1px black;
        float:left;
        display:inline;
        transition: 200ms ease-in-out;
        float: right;
        margin-bottom: 3em;
    }
    .body {
        display: flex;
        justify-content: center;
    }
    .head {
        
    }
    .content {
        min-height: 20em;
        width: 65em;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        padding: 3em;
    }
    .sect {
        display: block;
        margin-top: 2em;
    }
    .window {
		background-color: #1D1E26!important;
        margin-top: 3em;
        margin-bottom: 3em;
        margin-left: 0em;
        margin-right: 0em;
		border-radius: 20px;
		border-style: solid;
		border-width: 0px;
		box-shadow: inset 0 0 15px 1px #0F0F16, 0 0 0px 0px #0a0a0e;
		transition: 250ms ease-in-out;
	}
    @media only screen and (max-width: 1400px) {
        .content {
            width: 52em;
        }
        .cards {
            display: flow-root;
            margin-top: 3em;
            margin-bottom: 0em;
            justify-content: center;
    }

    }
    @media only screen and (max-width: 1000px) {
        .content {
            width: 26em;
        }
        .desc {
            text-align: center;
        }

    }
	.window:hover {
		box-shadow: inset 0 0 0px 0px #0F0F16, 0 0 20px 5px #0a0a0e;
	}
    a { 
		text-decoration: none!important;
	}
	.aa:hover {
		box-shadow: 0 0 0px 0px black;
	}
	.aa {
		font-weight: 500;
		box-shadow: 0 0 10px 1px black;
		transition: 200ms ease-in-out;
	}
</style>